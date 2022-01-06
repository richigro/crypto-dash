import React from "react";

import { SelectableTile, DeletableTile, DisabledTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

import { AppContext } from "../App/AppProvider";

export default function ({ coinKey, topSection }) {
  const [pageState, _, __, addCoin, removeCoin, isInFavorites] =
    React.useContext(AppContext);
  const coin = pageState.coinObject[coinKey];
  // console.log("the coin: ", coin);
  const handleClick = (topSection, coinKey, addCoin, removeCoin) => {
    return topSection
      ? () => {
          removeCoin(coinKey);
        }
      : () => {
          addCoin(coinKey);
        };
  };
  let TileType = SelectableTile;
  if (topSection) {
    TileType = DeletableTile;
  } else if (isInFavorites(coinKey)) {
    TileType = DisabledTile;
  }
  return (
    <TileType onClick={handleClick(topSection, coinKey, addCoin, removeCoin)}>
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileType>
  );
}
