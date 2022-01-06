import React from "react";
// import styled from "styled-components";
import styled from "styled-components";

const StyledCard = styled.div`
  /* border: 1px solid pink; */
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 4px;
  color: black;
  padding: 2rem;
`;

const StyledCoinImage = styled.img`
  /* width: 3rem; */
  /* height: 3rem; */
`;

const Flex = styled.div`
  display: flex;
`;

const CoinName = styled.div`
  flex-grow: 1;
`;

function CoinCard({ coinData }) {
  const imageURL = `http://cryptocompare.com/${coinData.ImageUrl}`;
  return (
    <StyledCard>
      <StyledCoinImage src={imageURL} alt={coinData.CoinName} />
      <Flex>
        <CoinName>{coinData.CoinName}</CoinName>
        <div>{coinData.Symbol}</div>
      </Flex>
    </StyledCard>
  );
}

export default CoinCard;
