import React from "react";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.5em;
  background-color: pink;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    // background-color: indigo;
    top: 0.8rem;
    z-index: 99;
    left: 1.2rem;
    transform: scale(1.2, 1.2);
  }
  // ${({ match }) => match && "top: 10px; left: 10px;"}
`;

const NavLink = (props) => {
  const match = useMatch(props.to);
  return <StyledLink match={match} {...props} />;
};

export default NavLink;
