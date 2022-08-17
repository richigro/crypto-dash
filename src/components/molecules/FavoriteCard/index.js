import React from "react";
import styled from "styled-components";
import { removeCoin, useProfile } from "../../../context/profileContext";
import { useCoinPrices } from "../../../hooks/coinHooks";

const Card = styled.div`
  background: white;
  color: black;
  width: 6rem;
  height: 6rem;
  margin-right: 9px;
  margin-bottom: 9px;
  border-radius: 4px;
  padding: 1rem;
`;

const FavoriteCard = ({ coinData }) => {
  const [profileState, dispatch] = useProfile();
  const { data } = useCoinPrices("BTC");
  console.log("the inner coin data: ", coinData);
  return (
    <Card>
      <h5>{coinData.CoinName}</h5>
      <button
        onClick={() => {
          removeCoin(dispatch, profileState, coinData);
        }}
      >
        Remove
      </button>
    </Card>
  );
};

export default FavoriteCard;
