import React from "react";
import styled from "styled-components";

import Sidebar from "../../atoms/Sidebar";
import FavoriteCard from "../FavoriteCard";

import { useProfile } from "../../../store/profileStore";

const StyledSidebar = styled(Sidebar)`
  width: 20rem;
  padding: 0.5rem;
  border: 9px solid green;
  overflow: auto;
  flex-shrink: 0;
`;

const Message = styled.div`
  border: 1px solid blue;
  margin-bottom: 2rem;
`;

const StyledHeader = styled.h2`
  margin-bottom: 1rem;
`;

const FavoriteList = styled.div`
  margin-top: 1rem;
  border: 1px solid orange;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// const FavortieCard = styled.div`
//   background: white;
//   width: 8rem;
//   height: 8rem;
//   margin-right: 9px;
//   margin-bottom: 9px;
// `;

const FavoritesSidebar = () => {
  const [profileState] = useProfile();
  return (
    <StyledSidebar>
      <Message>
        <StyledHeader>Pick your Favorites coins</StyledHeader>
        <div>Your favorites coins can be saved here and can also removed.</div>
      </Message>
      <div>Favorites</div>
      <FavoriteList>
        {profileState.favorites.map((coin) => (
          <FavoriteCard coinData={coin} />
        ))}
      </FavoriteList>
    </StyledSidebar>
  );
};

export default FavoritesSidebar;
