import React from "react";
import styled from "styled-components";
import { removeCoin, useFavorites } from "../../../store/profileStore";

const Card = styled.div`
  background: white;
  color: black;
  width: 8rem;
  height: 8rem;
  margin-right: 9px;
  margin-bottom: 9px;
`;

const FavoriteCard = ({ coinData }) => {
  const [stateObject, dispatch] = useFavorites();
  return (
    <Card>
      {coinData.CoinName}
      <button
        onClick={() => {
          removeCoin(dispatch, stateObject, coinData);
        }}
      >
        Remove
      </button>
    </Card>
  );
};

export default FavoriteCard;
