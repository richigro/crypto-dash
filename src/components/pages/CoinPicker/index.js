import React from "react";
import styled from "styled-components";

import CoinCard from "../../molecules/CoinCard";
import FavoritesSidebar from "../../molecules/FavoritesSidebar";

import { useCoinObject } from "../../../Hooks/coinHooks";

const Page = styled.div`
  display: flex;
  border: 3px dashed red;
`;

const ContentSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border: 5px dashed purple;
`;

const CoinList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px dashed pink;
`;

const LoadingList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-width: 76%; */
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
    <Page>
      <ContentSection>
        {isLoading && <div>Retriving all coins...</div>}
        {!isLoading && (
          <CoinList>
            {coinList &&
              coinList.length > 0 &&
              coinList.slice(0, 90).map((coinData) => {
                return <CoinCard coinData={coinData} />;
              })}
          </CoinList>
        )}
        {!isLoading && error && (
          <div>
            <h2>Error Loading List</h2>
            <div>Please try again</div>
          </div>
        )}
      </ContentSection>
      <FavoritesSidebar />
    </Page>
  );
}
