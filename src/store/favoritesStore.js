import React from "react";

const FavoritesContext = React.createContext();

const initialState = {
  favorites: [],
};

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_COIN":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_COIN":
      return { ...state, favorites: action.payload };
    default:
      throw new Error("Invalid action type.");
  }
}

const FavoritesProvider = (props) => {
  const [stateObject, dispatch] = React.useReducer(
    favoritesReducer,
    initialState
  );
  const value = [stateObject, dispatch];
  return <FavoritesContext.Provider value={value} {...props} />;
};

const useFavorites = () => {
  const context = React.useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "The useFavorites hook must be used withing a FavoritesProvider."
    );
  }
  return context;
};

const addCoin = (dispatch, coinData) => {
  dispatch({ type: "ADD_COIN", payload: coinData });
};

const removeCoin = (dispatch, stateObject, coinData) => {
  const favoritedCoins = stateObject.favorites;
  if (favoritedCoins.length === 0) {
    return;
  }
  const updatedFavorites = favoritedCoins.filter(
    (coin) => coin.Id !== coinData.Id
  );
  console.log("this far", updatedFavorites);
  dispatch({ type: "REMOVE_COIN", payload: updatedFavorites });
};

export { FavoritesProvider, useFavorites, addCoin, removeCoin };
