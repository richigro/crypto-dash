import React from "react";
import styled from "styled-components";

import { AppContext } from "../App/AppProvider";
import { fontSize1, greenBoxShadow, color3 } from "../Shared/Styles";

const ConfirmButton = styled.button`
  margin: 20px;
  cursor: pointer;
  background-color: inherit;
  border: none;
  color: ${color3};
  ${fontSize1}
  &:hover {
    ${greenBoxShadow}
  }
`;
const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function () {
  const [pageState, setPageState, confirmFavorites] =
    React.useContext(AppContext);
  return (
    <CenterDiv>
      <ConfirmButton onClick={confirmFavorites}>
        Confirm Favorites
      </ConfirmButton>
    </CenterDiv>
  );
}
