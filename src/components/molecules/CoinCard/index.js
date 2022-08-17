import React from "react";
// import styled from "styled-components";
import styled from "styled-components";
import { addCoin, useProfile } from "../../../context/profileContext";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;
  background-color: white;
  border-radius: 7px;
  color: black;
  padding: 1.4rem;
  padding-top: 0.6rem;
  width: 11rem;
  height: 11rem;
  margin-right: 1rem;
`;

const ImageContainer = styled.div`
  margin-right: 0.5rem;
`;

const StyledCoinImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Flex = styled.div`
  display: flex;
`;

const CoinName = styled.h5`
  border: 1px solid red;
`;

const CardHeader = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #aaa;
`;

const CardBody = styled.div`
  height: 100%;
  margin-bottom: 1rem;
`;

const CardFooter = styled.div``;

function CoinCard({ coinData }) {
  const imageURL = `http://cryptocompare.com/${coinData.ImageUrl}`;
  const [profileState, dispatch] = useProfile();
  return (
    <Card>
      <CardHeader>
        <ImageContainer>
          <StyledCoinImage src={imageURL} alt={coinData.CoinName} />
        </ImageContainer>
        <CoinName>{coinData.CoinName}</CoinName>
      </CardHeader>
      <StyledHr />
      <CardBody>
        <Flex>
          <div>Coin Symbol: </div> <div>{coinData.Symbol}</div>
        </Flex>
      </CardBody>
      <CardFooter>
        <button
          onClick={() => {
            addCoin(dispatch, profileState, coinData);
          }}
        >
          Add To Favorites
        </button>
      </CardFooter>
    </Card>
  );
}

export default CoinCard;
