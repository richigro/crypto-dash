import React from "react";
import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { useHistoricalPricing } from "../../../hooks/coinHooks";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Bitcoin",
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 92],
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
  width: 40rem;
  height: 30rem;
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
          <PriceDisplay>$24,014.01</PriceDisplay>
        </LeftSideHeader>
        <RightSideHeader>
          <ButtonList>
            <ButtonContainer>1h</ButtonContainer>
            <ButtonContainer>1d</ButtonContainer>
            <ButtonContainer>1w</ButtonContainer>
            <ButtonContainer>1m</ButtonContainer>
            <ButtonContainer>All</ButtonContainer>
          </ButtonList>
        </RightSideHeader>
      </CardHeader>
      <CardBody>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Bitcoin Price",
              fontSize: 20,
            },
            legend: {
              display: false,
              postion: "right",
            },
            responsive: true,
          }}
        />
      </CardBody>
    </PriceDisplayCard>
  );
}
export default LineCharts;
