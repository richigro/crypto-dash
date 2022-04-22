import React from "react";
import { useQuery } from "react-query";
// import cc from "cryptocompare";

const cc = require("cryptocompare");

export function useCoinObject() {
  const { data, isLoading, error } = useQuery(["coinList"], () =>
    cc.coinList()
  );

  const coinObject = React.useMemo(() => {
    return data && data.Data;
  }, [data]);

  return { data: coinObject, isLoading, error };
}

export function useCoinPrices(coinSymbol: string, options = {}) {
  return useQuery(["coinPrices"], () =>
    cc.priceFull(coinSymbol, "USD", options)
  );
}
