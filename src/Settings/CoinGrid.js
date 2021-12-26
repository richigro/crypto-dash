import React from "react";
import styled from "styled-components";

import CoinTile from "./CoinTile";

import { AppContext } from "../App/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

function getCoinsToDisplay(coinObject) {
  return Object.keys(coinObject).slice(0, 100);
}

export default function CoinGrid() {
  const [pageState] = React.useContext(AppContext);
  return (
    <div>
      the list maybe
      <CoinGridStyled>
        {getCoinsToDisplay(pageState.coinObject).map((coinKey) => {
          return <CoinTile key={coinKey} coinKey={coinKey} />;
        })}
      </CoinGridStyled>
    </div>
  );
}
