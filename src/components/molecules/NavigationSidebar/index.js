import React from "react";
import styled from "styled-components";

import Sidebar from "../../atoms/Sidebar";
import { Link } from "react-router-dom";

const StyledSidebar = styled(Sidebar)`
  width: 15rem;
  padding: 1rem;
  border: 9px solid green;
`;

const StyledList = styled.nav`
  /* color: red; */
  /* list-style-type: none; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
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
        <StyledLink to="/dashboard">Dashboard</StyledLink>
        <StyledLink to="/favorites">MyFavorites</StyledLink>
        <StyledLink to="/pickcoins">Pick Favorites</StyledLink>
      </StyledList>
    </StyledSidebar>
  );
};

export default NavigationSidebar;
