import React from "react";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.5em;
  background-color: #277bc0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  ${({ match }) => match && "border-left: 6px solid blue;"}
`;

const NavLink = (props) => {
  const match = useMatch(props.to);
  return <StyledLink match={match} {...props} />;
};

export default NavLink;
