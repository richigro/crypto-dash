import React from "react";
// import styled from "styled-components";
import styled from "styled-components";
import { addCoin, useProfile } from "../../../context/profileContext";

const Card = styled.div`
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

const CardHeader = styled.div`
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

const CardBody = styled.div`
  border: 1px solid pink;
  height: 100%;
  margin-bottom: 1rem;
`;

const CardFooter = styled.div`
  border: 2px solid blue;
`;

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
