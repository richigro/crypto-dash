terraform {
  # this part may be optional
  # backend "s3" {
  #   bucket         = "ricardo-terraform-backend"
  #   dynamodb_table = "ricardo-db-backend"
  #   encrypt        = true
  #   key            = "terraform.tfstate"
  #   region         = "us-west-2"
  # }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

provider "aws" {
  alias = "us-east-1"
  region = "us-east-1"
}

locals {
  bucket_name = "static-assests-bucket"
    tags = {
        created_by = "terraform"
    }
}

variable "endpoint" {
  description = "Endpoint url"
  type = string
  # default only for testing
  default = "test.cryptodashboardproject.xyz"
}

variable "domain_name" {
  description = "the domain name"
  type = string
  # Domain name on hosted zone
  default = "cryptodashboardproject.xyz"
}

resource "aws_s3_bucket" "bucket-for-cdn" {
  bucket = local.bucket_name
  acl = "private"
  force_destroy = true
  tags = local.tags

  server_side_encryption_configuration {
    rule {
        apply_server_side_encryption_by_default {
            sse_algorithm = "AES256"
        }
    }
  }
}

resource "aws_s3_bucket_public_access_block" "s3block" {
  bucket = aws_s3_bucket.bucket-for-cdn.id
  block_public_acls = true
  block_public_policy = true
  ignore_public_acls = true
  restrict_public_buckets = true
}

resource "aws_cloudfront_distribution" "my_cdn" {
  enabled = true
  aliases = [var.endpoint]
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.bucket-for-cdn.bucket_regional_domain_name
    origin_id = aws_s3_bucket.bucket-for-cdn.bucket_regional_domain_name

    s3_origin_config {
    origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
  }
  }

  

  default_cache_behavior {
      allowed_methods = ["HEAD", "DELETE", "POST", "GET", "OPTIONS", "PUT", "PATCH"]
      cached_methods = ["GET", "HEAD", "OPTIONS"]
      target_origin_id = aws_s3_bucket.bucket-for-cdn.bucket_regional_domain_name
      viewer_protocol_policy = "redirect-to-https"

      forwarded_values {
        headers = []
        query_string = true

        cookies {
            forward = "all"
        }
      }
  }

  restrictions {
    geo_restriction {
        restriction_type = "none"
    }
  }


  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method = "sni-only"
  }

  tags = local.tags

}


resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for ${var.endpoint}"
}

resource "aws_s3_bucket_policy" "s3policy" {
  bucket = aws_s3_bucket.bucket-for-cdn.id
  policy = data.aws_iam_policy_document.s3policy.json
}

data "aws_iam_policy_document" "s3policy" {
    statement {
      actions = ["s3:GetObject"]

      resources = [
          aws_s3_bucket.bucket-for-cdn.arn,
          "${aws_s3_bucket.bucket-for-cdn.arn}/*"
      ]

      principals {
        type = "AWS"
        identifiers = [ aws_cloudfront_origin_access_identity.oai.iam_arn]
      }
    }
}

resource "aws_acm_certificate" "cert" {
  provider = aws.us-east-1
  domain_name = var.domain_name
  subject_alternative_names = ["*.${var.domain_name}"]
  validation_method = "DNS"

  tags = local.tags
}

resource "aws_route53_record" "certvalidation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.domain.zone_id
}

resource "aws_acm_certificate_validation" "certvalidation" {
  provider = aws.us-east-1
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.certvalidation : record.fqdn]
}

# still need to create this hosted zone in aws route 53
data "aws_route53_zone" "domain" {
  name = var.domain_name
}

resource "aws_route53_record" "websiteurl" {
  name = var.endpoint
  zone_id = data.aws_route53_zone.domain.zone_id
  type = "A"

  alias {
    name = aws_cloudfront_distribution.my_cdn.domain_name
    zone_id = aws_cloudfront_distribution.my_cdn.hosted_zone_id
    evaluate_target_health = true
  }
}