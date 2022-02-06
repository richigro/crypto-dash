import React from "react";
import { useQuery } from "react-query";

const cc = require("cryptocompare");

export function useCoinObject() {
  const { data, isLoading, error } = useQuery(["coinList"], () =>
    cc.coinList()
  );


  const coinObject = React.useMemo(() => {
    return data && data.Data;
  }, [data]);

  // const coinList

  return { data: coinObject, isLoading, error };
}

export function useCoinPrices(coinSymbol, options = {}) {
  const {data, isLoading, isError, error} = useQuery(['coinPrices'], () => cc.priceFull(coinSymbol, "USD", options));
  console.log('the data coming back: ', data);
  if(isError) {
    console.log('something went wrong', error)
  } else {
    console.log('no errors so far')
  }
  return {data}
}
