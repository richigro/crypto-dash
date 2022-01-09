import React from "react";
import styled from "styled-components";

const GlobalHeader = styled.header`
  /* position: fixed;
   */
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  /* margin-bottom: 40px; */
  border: 1px solid red;
  background-color: #010e2c;
  z-index: 1;
  width: 100%;
  height: 5rem;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid blue;
`;

const Logo = styled.div`
  font-size: 1.5em;
  /* flex-grow: 1; */
`;

const StyledInput = styled.input`
  width: 70%;
  border-radius: 1rem;
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`;

export default function () {
  return (
    <GlobalHeader>
      <HeaderContainer>
        <Logo>CryptoDash</Logo>
        <StyledInput type="text" placeholder="Search for coins..." />
        <StyledButton>...</StyledButton>
      </HeaderContainer>
    </GlobalHeader>
  );
}
