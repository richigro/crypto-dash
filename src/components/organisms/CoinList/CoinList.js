// import React from "react";
// import styled from "styled-components";

// import CoinCard from "../../molecules/CoinCard/CoinCard";

// import { useCoinObject } from "../../../Hooks/coinHooks";

// // import CoinTile from "./CoinTile";

// // import { AppContext } from "../App/AppProvider";

// export const StyledCoinList = styled.div`
//   /* display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
//   grid-gap: 15px; */
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// // function getCoinsToDisplay(coinObject, topSection, favorites) {
// //   return topSection ? favorites : Object.keys(coinObject).slice(0, 40);
// // }

// export default function CoinGrid({ topSection }) {
//   // const [{ coinObject, favorites }] = React.useContext(AppContext);
//   // console.log("the favorites as of now: ", favorites);
//   const { data: coinObject, isLoading, error } = useCoinObject();
//   console.log("to hide your face: ", coinObject);

//   // This is wrapped in useMemo because its a very expesive operation and we don't want this to run on every re-render or update from this component.
//   const coinList = React.useMemo(() => {
//     return (
//       coinObject && Object.entries(coinObject).map(([_, coinData]) => coinData)
//     );
//   }, [coinObject]);

//   console.log("the coin list: ", coinList);
//   return (
//     <div>
//       {topSection ? "My Favorites" : "Select your favorites"}
//       <StyledCoinList>
//         {/* {getCoinsToDisplay(coinObject, topSection, favorites).map((coinKey) => {
//           return (
//             <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey} />
//           );
//         })} */}
//         {isLoading && <div>Retriving all coins...</div>}
//         {/* { &&
//           Object.entries(coinObject).length > 0 &&
//           Object.entries(coinObject).map()} */}
//         {coinList &&
//           coinList.length > 0 &&
//           coinList.slice(0, 90).map((coinData) => {
//             return <CoinCard coinData={coinData} />;
//           })}
//       </StyledCoinList>
//     </div>
//   );
// }
