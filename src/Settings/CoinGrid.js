import React from "react";
import styled from "styled-components";

import { SelectableTile } from "../Shared/Tile";

import { AppContext } from "../App/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

export default function CoinGrid() {
  const [pageState] = React.useContext(AppContext);
  return (
    <div>
      the list maybe
      <CoinGridStyled>
        {Object.keys(pageState.coinList).map((coin) => {
          return <SelectableTile key={coin}>{coin}</SelectableTile>;
        })}
      </CoinGridStyled>
    </div>
  );
}
