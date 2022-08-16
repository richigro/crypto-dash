import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 50rem;
  position: sticky;
  top: 5rem;
`;

const Sidebar = ({ className, children }) => {
  return <SidebarContainer className={className}>{children}</SidebarContainer>;
};

export default Sidebar;
