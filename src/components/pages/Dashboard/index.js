import React from "react";
import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { useProfile } from "../../../context/profileContext";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Bitcoin",
      backgroundColor: "yellow",
      borderColor: "yellow",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const StyledChartContainer = styled.div`
  display: flex;
  // background-color: blue;
  margin-top: 2rem;
  height: 20rem;
  padding: 2rem;
`;

const Dashboard = () => {
  const [profileState] = useProfile();
  return (
    <div>
      <ul>
        {profileState.favorites.map((favorite) => {
          console.log("the favs: ", favorite);
          return <li key={favorite.CoinName}>{favorite.CoinName}</li>;
        })}
      </ul>
      <StyledChartContainer>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </StyledChartContainer>
    </div>
  );
};

export default Dashboard;
