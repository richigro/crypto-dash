import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';

const ConfirmButton = styled.button`
 margin: 20px;
 color: green;
 cursor: pointer;
`
const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`

export default function() {
  const [pageState, setPageState, confirmFavorites] = React.useContext(AppContext);
  return(
    <CenterDiv>
      <ConfirmButton onClick={confirmFavorites}>
        Confirm Favorites
      </ConfirmButton>
    </CenterDiv>
  )
}