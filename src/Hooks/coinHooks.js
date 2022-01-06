import React from "react";
import { useQuery } from "react-query";

const cc = require("cryptocompare");

export function useCoinList() {
  const { data, isLoading, error } = useQuery(["coinList"], () =>
    cc.coinList()
  );

  console.log(data && data.data);

  const coinList = React.useMemo(() => {
    return (
      data &&
      Object.entries(data.Data).map(([symbol, coinData]) => {
        // console.log("the stuff", stuff);
        return { [symbol]: coinData };
      })
    );
  });

  // console.log("theData", theData);
  // const coinList

  return { data: coinList, isLoading, error };
}
