import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default function CoinGrid() {
  const [pageState] = React.useContext(AppContext);
  return (
    <div>
      the list maybe
      <CoinGridStyled>
        {Object.keys(pageState.coinList).map((coin) => {
          return <div key={coin}>{coin}</div>;
        })}
      </CoinGridStyled>
    </div>
  );
}
