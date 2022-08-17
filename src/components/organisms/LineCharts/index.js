import React from "react";
import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { useHistoricalPricing } from "../../../hooks/coinHooks";

// const gradient =

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ],
  datasets: [
    {
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 2,
      data: [41822, 38777, 44404, 46296, 38471, 29788, 19247, 23273],
      fill: true,
      background: "linear-gradient(rgba(250,0,0,0.5),transparent)",
      backgroundColor: "orange",
    },
  ],
};

const PriceDisplayCard = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
  padding: 0.5rem;
  background-color: white;
  color: black;
  max-width: 40rem;
  max-height: 30rem;
  border-radius: 4px;
`;

const CardHeader = styled.div`
  display: flex;
  /* border: 5px solid blue; */
  width: 100%;
  height: 30%;
`;

const LeftSideHeader = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  /* border: 5px solid pink; */
  /* padding: 1rem; */
  margin-left: 1rem;
  width: 35%;
`;

const StyledCoinImage = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

const CoinBanner = styled.div`
  display: flex;
  align-items: center;
`;

const RightSideHeader = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  /* border: 3px solid orange; */
`;

const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  /* border: 1px solid purple; */
  list-style: none;
  display: flex;
`;

const ButtonContainer = styled.li`
  margin-right: 0.5rem;
`;

const CardBody = styled.div`
  /* border: 5px solid gray; */
  position: relative;
  height: 80%;
  width: 100%;
`;
const PriceText = styled.p`
  margin-top: 0.5rem;
  /* border: 1px solid blue; */
`;
const PriceDisplay = styled.div`
  /* border: 1px solid red; */
  margin-top: 0.5rem;
  font-size: 2rem;
`;

function LineCharts() {
  const { data } = useHistoricalPricing("BTC", ["USD"], new Date());
  console.log("the data now: ", data);
  return (
    <PriceDisplayCard>
      <CardHeader>
        <LeftSideHeader>
          <CoinBanner>
            <StyledCoinImage
              src={
                "https://m.media-amazon.com/images/I/518r+Jl3GVL._AC_SL1500_.jpg"
              }
            />
            <h5>Bitcoin</h5>
          </CoinBanner>
          <PriceText>Price</PriceText>
          <PriceDisplay>$23,273</PriceDisplay>
        </LeftSideHeader>
        <RightSideHeader>
          <ButtonList>
            <ButtonContainer>1y</ButtonContainer>
          </ButtonList>
        </RightSideHeader>
      </CardHeader>
      <CardBody>
        <Line
          data={state}
          options={{
            radius: 3,
            hitRadius: 30,
            hoverRadius: 5,
            title: {
              display: true,
              text: "Bitcoin Price",
              fontSize: 20,
            },
            scales: {
              y: {
                ticks: {
                  callback: (number) => {
                    return `$${number}`;
                  },
                },
              },
            },
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </CardBody>
    </PriceDisplayCard>
  );
}
export default LineCharts;
