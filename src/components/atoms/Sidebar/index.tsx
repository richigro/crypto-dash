import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  border: 9px solid red;
  height: 50rem;
  position: sticky;
  top: 5rem;
`;

const Sidebar = ({ className: string, children }) => {
  return <SidebarContainer className={className}>{children}</SidebarContainer>;
};

export default Sidebar;
