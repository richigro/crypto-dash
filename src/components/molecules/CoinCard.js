import React from "react";
// import styled from "styled-components";
import styled from "styled-components";

const StyledCard = styled.div`
  /* border: 1px solid pink; */
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 4px;
  color: black;
  padding: 1.4rem;
  padding-top: 0.6rem;
  /* border: 5px solid pink; */
  width: 10rem;
  height: 10rem;
  margin-right: 1rem;
`;

const ImageContainer = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
`;

const StyledCoinImage = styled.img`
  /* width: 3rem; */
  /* height: 3rem; */
  /* flex-grow: 1; */
  width: 2rem;
  height: 2rem;
  border: 5px solid red;
`;

const Flex = styled.div`
  display: flex;
`;

const CoinName = styled.div`
  /* flex-grow: 1; */
`;

const CoinHeader = styled.div`
  /* color: red; */
  width: 100%;
  padding: 0;
  border: 1px solid orange;
  display: flex;
  align-items: center;
`;

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #aaa;
`;

function CoinCard({ coinData }) {
  const imageURL = `http://cryptocompare.com/${coinData.ImageUrl}`;
  console.log("the coin data: ", coinData);
  return (
    <StyledCard>
      <CoinHeader>
        <ImageContainer>
          <StyledCoinImage src={imageURL} alt={coinData.CoinName} />
        </ImageContainer>
        <CoinName>{coinData.CoinName}</CoinName>
      </CoinHeader>
      <StyledHr />
      <Flex>
        <div>{coinData.Symbol}</div>
      </Flex>
    </StyledCard>
  );
}

export default CoinCard;
