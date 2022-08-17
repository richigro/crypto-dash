import React from "react";
import styled from "styled-components";

import { useProfile } from "../../../context/profileContext";

import LineCharts from "../../organisms/LineCharts";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 10px solid pink;
  height: 100%;
`;

const Dashboard = () => {
  const [profileState] = useProfile();

  React.useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <DashboardContainer>
      <LineCharts />
    </DashboardContainer>
  );
};

export default Dashboard;
