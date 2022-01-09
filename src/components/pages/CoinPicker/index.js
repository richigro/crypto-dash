import React from "react";
import styled from "styled-components";

import CoinCard from "../../molecules/CoinCard";
import FavoritesSidebar from "../../molecules/FavoritesSidebar";

import { useCoinObject } from "../../../Hooks/coinHooks";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const StyledCoinList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 76%;
`;

const LoadingList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 76%;
  height: 100%;
`;

export default function CoinPicker() {
  const { data: coinObject, isLoading, error } = useCoinObject();
  console.log("to hide your face: ", coinObject);

  // This is wrapped in useMemo because its a very expesive operation and we don't want this to run on every re-render or update from this component.
  const coinList = React.useMemo(() => {
    return (
      coinObject && Object.entries(coinObject).map(([_, coinData]) => coinData)
    );
  }, [coinObject]);

  console.log("the coin list: ", coinList);
  return (
    <Wrapper>
      {isLoading && (
        <LoadingList>
          <div>Retriving all coins...</div>
        </LoadingList>
      )}
      {!isLoading && !error && (
        <>
          <StyledCoinList>
            {coinList &&
              coinList.length > 0 &&
              coinList.slice(0, 90).map((coinData) => {
                return <CoinCard coinData={coinData} />;
              })}
          </StyledCoinList>
          <FavoritesSidebar />
        </>
      )}
    </Wrapper>
  );
}
