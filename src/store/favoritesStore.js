import React from "react";

const FavoritesContext = React.createContext();

// const initialState = {
//   favorites: [{ CoinName: "testing" }],
// };

// function favoritesReducer(state, action) {
//   switch (action.type) {
//     case "yolo":
//       return undefined;
//     default:
//       throw new Error("whaat");
//   }
// }

const FavoritesProvider = (props) => {
  const [favorites, setFavorites] = React.useState([]);
  const value = [favorites, setFavorites];
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

export { FavoritesProvider, useFavorites };
