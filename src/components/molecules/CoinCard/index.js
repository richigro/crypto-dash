import React from "react";
// import styled from "styled-components";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 10px;
  color: black;
  padding: 1.4rem;
  padding-top: 0.6rem;
  /* border: 5px solid pink; */
  width: 15rem;
  height: 15rem;
  margin-right: 1rem;
`;

const ImageContainer = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
`;

const StyledCoinImage = styled.img`
  width: 3rem;
  height: 3rem;
  border: 5px solid red;
`;

const Flex = styled.div`
  display: flex;
`;

const CoinName = styled.div`
  /* flex-grow: 1; */
`;

const CoinHeader = styled.div`
  width: 100%;
  padding: 0;
  border: 1px solid orange;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #aaa;
`;

const CoinBody = styled.div`
  border: 1px solid pink;
  height: 100%;
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
      <CoinBody>
        <Flex>
          <div>Coin Symbol: </div> <div>{coinData.Symbol}</div>
        </Flex>
      </CoinBody>
    </StyledCard>
  );
}

export default CoinCard;
