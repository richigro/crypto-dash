import React from "react";
const cc = require("cryptocompare");

export const AppContext = React.createContext();

const pageSettings = () => {
  let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
  if (!cryptoDashData) {
    return { page: "settings", firstVisit: true };
  }
  return { page: "dashboard", firstVisit: false };
};

export default function AppProvider(props) {
  const [pageState, setPageState] = React.useState(pageSettings());
  const confirmFavorites = () => {
    setPageState({ firstVisit: false, page: "dashboard" });
    localStorage.setItem("cryptoDash", JSON.stringify({ test: "hello" }));
  };
  React.useEffect(() => {
    (async () => {
      console.log("this baby should be running!");
      const { Data: coinObject } = await cc.coinList();
      console.log("What do we get here?", Object.entries(coinObject));
      setPageState((prevState) => ({ ...prevState, coinObject }));
    })();
  }, []);
  const value = [pageState, setPageState, confirmFavorites];
  return <AppContext.Provider value={value} {...props} />;
}
