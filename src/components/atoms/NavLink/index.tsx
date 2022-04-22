import React from "react";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";

const StyledLink = styled(Link)<{ match: boolean }>`
  color: inherit;
  text-decoration: none;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem;
  width: 90%;
  &:hover {
    background-color: indigo;
  }
  ${({ match }) =>
    match && "border-right: 10px solid indigo; background: gray;"}
`;

const NavLink = (props) => {
  const match = useMatch(props.to);
  return <StyledLink match={!!match} {...props} />;
};

export default NavLink;
