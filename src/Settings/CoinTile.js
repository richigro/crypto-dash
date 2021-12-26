import React from "react";

import { SelectableTile, DeletableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

import { AppContext } from "../App/AppProvider";

export default function ({ coinKey, topSection }) {
  const [pageState] = React.useContext(AppContext);
  const coin = pageState.coinObject[coinKey];
  console.log("the coin: ", coin);
  let TileType = SelectableTile;
  if (topSection) {
    TileType = DeletableTile;
  }
  return (
    <TileType>
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileType>
  );
}
