import React from "react";
import styled from "styled-components";

import { useProfile } from "../../../context/profileContext";

import LineCharts from "../../organisms/LineCharts";

const DashboardContainer = styled.div`
  border: 1px solid pink;
  height: 100%;
`;

const Dashboard = () => {
  const [profileState] = useProfile();

  React.useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <DashboardContainer>
      {/* <ul>
        {profileState.favorites.map((favorite) => {
          console.log("the favs: ", favorite);
          return <li key={favorite.CoinName}>{favorite.CoinName}</li>;
        })}
      </ul> */}
      <LineCharts />
    </DashboardContainer>
  );
};

export default Dashboard;
