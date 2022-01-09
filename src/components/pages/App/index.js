import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationSidebar from "../../molecules/NavigationSidebar";
import FavoritesSidebar from "../../molecules/FavoritesSidebar";
import GlobalHeader from "../../organisms/GlobalHeader";
import CoinPicker from "../CoinPicker";
import Dashboard from "../Dashboard";
import Favorites from "../Favorites";

const MainApp = styled.main`
  border: 5px solid orange;
  padding: 5rem;
  padding-top: 0;
  padding-bottom: 0;
`;

const SidebarAndContentWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 8px solid orange;
`;

// const NavigationSidebar = styled(Sidebar)`
//   width: 15rem;
//   color: red;
// `;

// const FavoritesSidebar = styled(Sidebar)`
//   width: 20rem;
// `;

const PageDisplay = styled.div`
  flex-grow: 1;
  border: 3px solid blue;
  width: 60%;
`;

export default function App() {
  return (
    <MainApp>
      <BrowserRouter>
        <GlobalHeader />
        <SidebarAndContentWrapper>
          <NavigationSidebar>hi</NavigationSidebar>
          <PageDisplay>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/pickcoins" element={<CoinPicker />} />
            </Routes>
          </PageDisplay>
        </SidebarAndContentWrapper>
      </BrowserRouter>
    </MainApp>
  );
}
