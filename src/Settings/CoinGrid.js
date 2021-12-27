import React from "react";
import styled from "styled-components";

import CoinTile from "./CoinTile";

import { AppContext } from "../App/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
`;

function getCoinsToDisplay(coinObject, topSection, favorites) {
  return topSection ? favorites : Object.keys(coinObject).slice(0, 40);
}

export default function CoinGrid({ topSection }) {
  const [{ coinObject, favorites }] = React.useContext(AppContext);
  console.log("the favorites as of now: ", favorites);
  return (
    <div>
      {topSection ? "My Favorites" : "Select your favorites"}
      <CoinGridStyled>
        {getCoinsToDisplay(coinObject, topSection, favorites).map((coinKey) => {
          return (
            <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey} />
          );
        })}
      </CoinGridStyled>
    </div>
  );
}
