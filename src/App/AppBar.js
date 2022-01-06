import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import { AppContext } from "./AppProvider";

import { useCoinObject } from "../Hooks/coinHooks.js";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;
const ControlButtonElement = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
      color: purple;
    `}
`;

function toProperCase(lowerCaseString) {
  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.substr(1);
}

function ControlButton({ name, active, ...props }) {
  const [pageState, setPageState] = React.useContext(AppContext);
  const { data, isLoading, error } = useCoinObject();
  console.log("on the intended component", data && data["42"]);
  return (
    <ControlButtonElement
      active={pageState.page === name}
      onClick={() => {
        setPageState((prevState) => ({ ...prevState, page: name }));
      }}
      {...props}
    >
      {toProperCase(name)}
    </ControlButtonElement>
  );
}
export default function () {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton name="dashboard" />
      <ControlButton name="settings" active />
    </Bar>
  );
}
