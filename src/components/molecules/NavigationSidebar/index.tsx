import React from "react";
import styled from "styled-components";

import Sidebar from "../../atoms/Sidebar";
import NavLink from "../../atoms/NavLink";

const StyledSidebar = styled(Sidebar)`
  width: 15rem;
  padding: 1rem;
  border: 9px solid green;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationSidebar = () => {
  return (
    <StyledSidebar>
      <StyledNav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/favorites">MyFavorites</NavLink>
        <NavLink to="/pickcoins">Pick Favorites</NavLink>
      </StyledNav>
    </StyledSidebar>
  );
};

export default NavigationSidebar;
