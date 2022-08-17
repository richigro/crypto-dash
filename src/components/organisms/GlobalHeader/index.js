import React from "react";
import styled from "styled-components";

const GlobalHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  background-color: #010e2c;
  z-index: 1;
  width: 100%;
  height: 5rem;
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 15rem; */
  /* border: 2px solid red; */
  margin-right: 3rem;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const SearchSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-right: 1rem;
  height: 2rem;
  border-radius: 0.3rem;
  padding: 1rem;
`;

const MiscSection = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid pink; */
`;

const StyledButton = styled.button`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`;

export default function () {
  return (
    <GlobalHeader>
      <LogoSection>
        <Logo>CryptoDash</Logo>
      </LogoSection>
      <SearchSection>
        <StyledInput type="text" placeholder="Search for coins..." />
      </SearchSection>
      <MiscSection>
        <StyledButton>...</StyledButton>
      </MiscSection>
    </GlobalHeader>
  );
}
