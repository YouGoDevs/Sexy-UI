import React from "react";
import styled from "styled-components";

/*
Tabs: Provides context and state for all components
TabList: Wrapper for the Tab components
Tab: element that serves as a label for one of the tab panels and can be activated to display that panel.
TabPanels: Wrapper for the TabPanel components
TabPanel: element that contains the content associated with a tab

*/

const AlternativeTab = styled.div`
  display: flex;
  width: 80px;
  height: 40px;
`;

export const AltTab = ({ children}) => {
  return (
    <div style={{ border: "2px solid blue", background: "gray" }}>
      {children}
    </div>
  );
};
