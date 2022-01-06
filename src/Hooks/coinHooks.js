import React from "react";
import { useQuery } from "react-query";

const cc = require("cryptocompare");

export function useCoinObject() {
  const { data, isLoading, error } = useQuery(["coinList"], () =>
    cc.coinList()
  );

  console.log(data && data.data);

  const coinObject = React.useMemo(() => {
    return data && data.Data;
  }, [data]);

  console.log("theData", coinObject);
  // const coinList

  return { data: coinObject, isLoading, error };
}
