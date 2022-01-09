import React from "react";
import styled from "styled-components";

import Sidebar from "../../atoms/Sidebar";

const StyledSidebar = styled(Sidebar)`
  width: 15rem;
  padding: 1rem;
  border: 9px solid green;
`;

const StyledList = styled.div`
  /* color: red; */
  /* list-style-type: none; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`;

const StyledLink = styled.a`
  /* color: red; */
  border: 1px solid orange;
  margin-bottom: 1rem;
  border-radius: 10px;
  text-align: center;
  padding: 0.5rem;
  width: 90%;
  &:hover {
    /* color: red; */
    background-color: red;
  }
`;

const NavigationSidebar = () => {
  return (
    <StyledSidebar>
      <StyledList>
        <StyledLink>Dashboard</StyledLink>
        <StyledLink>MyFavorites</StyledLink>
        <StyledLink>Pick Favorites</StyledLink>
      </StyledList>
    </StyledSidebar>
  );
};

export default NavigationSidebar;
