import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  color: black;
  width: 8rem;
  height: 8rem;
  margin-right: 9px;
  margin-bottom: 9px;
`;

const FavoriteCard = ({ coinData }) => {
  return <Card>{coinData.CoinName}</Card>;
};

export default FavoriteCard;
