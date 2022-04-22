import React from "react";

const ProfileContext = React.createContext(undefined);

const initialState = {
  favorites: [],
  isFirstVisit: true,
};

function profileReducer(state, action) {
  switch (action.type) {
    case "ADD_COIN":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_COIN":
      return { ...state, favorites: action.payload };
    default:
      throw new Error("Invalid action type.");
  }
}

const ProfileProvider = (props) => {
  const [profileState, dispatch] = React.useReducer(
    profileReducer,
    initialState,
    () => {
      return {
        favorites: JSON.parse(window.localStorage.getItem("favorites")) || [],
        isFirstVisit: true,
      };
    }
  );
  const value = [profileState, dispatch];
  return <ProfileContext.Provider value={value} {...props} />;
};

const useProfile = () => {
  const context = React.useContext(ProfileContext);
  if (!context) {
    throw new Error(
      "The useFavorites hook must be used withing a FavoritesProvider."
    );
  }
  return context;
};

const addCoin = (dispatch, stateObject, coinData) => {
  window.localStorage.setItem(
    "favorites",
    JSON.stringify([...stateObject.favorites, coinData])
  );
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
  window.localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  dispatch({ type: "REMOVE_COIN", payload: updatedFavorites });
};

export { ProfileProvider, useProfile, addCoin, removeCoin };
