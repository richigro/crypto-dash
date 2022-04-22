import React from "react";
import styled from "styled-components";
import { removeCoin, useProfile } from "context/profileContext";
import { useCoinPrices } from "hooks/coinHooks";

const Card = styled.div`
  background: white;
  color: black;
  width: 8rem;
  height: 8rem;
  margin-right: 9px;
  margin-bottom: 9px;
`;

const FavoriteCard = ({ coinData }) => {
  const [profileState, dispatch] = useProfile();
  const { data } = useCoinPrices("BTC");

  return (
    <Card>
      {coinData.CoinName}
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
