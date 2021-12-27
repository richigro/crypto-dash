import React from "react";
const cc = require("cryptocompare");

export const AppContext = React.createContext();

const pageSettings = () => {
  let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
  if (!cryptoDashData) {
    return { page: "settings", firstVisit: true, favorites: [] };
  } else {
    return {
      page: "dashboard",
      firstVisit: false,
      favorites: cryptoDashData.favorites,
    };
  }
};

const MAX_FAVORITES = 10;
export default function AppProvider(props) {
  const [pageState, setPageState] = React.useState(pageSettings());
  const saveFavorites = () => {
    setPageState({ firstVisit: false, page: "dashboard" });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({ favorites: pageState.favorites })
    );
  };
  React.useEffect(() => {
    (async () => {
      const { Data: coinObject } = await cc.coinList();
      setPageState((prevState) => ({ ...prevState, coinObject }));
    })();
  }, []);

  const addCoin = (key) => {
    const favorites = [...pageState.favorites];
    if (favorites.length >= MAX_FAVORITES) {
      alert(
        `Unable to add coin: you can only have up to ${MAX_FAVORITES} favorites at one time. Remove to from favorites to be able to add more.`
      );
    }
    if (favorites.indexOf(key) !== -1) {
      return;
    }
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      setPageState((prevState) => ({ ...prevState, favorites }));
    }
  };

  const removeCoin = (key) => {
    let favorites = [...pageState.favorites];

    const coinIndex = favorites.indexOf(key);
    if (coinIndex > -1) {
      favorites.splice(coinIndex, 1);
    } else {
      throw new Error("Expected to find item in array");
    }

    setPageState((prevState) => ({ ...prevState, favorites }));
  };

  const isInFavorites = (key) => {
    const favorites = [...pageState.favorites];
    return favorites.indexOf(key) !== -1;
  };

  const value = [
    pageState,
    setPageState,
    saveFavorites,
    addCoin,
    removeCoin,
    isInFavorites,
  ];
  return <AppContext.Provider value={value} {...props} />;
}
