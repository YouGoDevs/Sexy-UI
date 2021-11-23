import React from "react";
import { Tabs } from "./packages/miTabs/src/Tabs";
import styled from "styled-components";
import { useState } from "react";
import { Tab } from "./packages/miTabs/src/Tab";
import { TabPanel } from "./packages/miTabs/src/TabPanel";
import { TabZone } from "./packages/tabs/src/TabZone";

const TabContainer = styled.div`
  display: flex;
  padding: 2px;
`;
const TabPanelContainer = styled.div`
  height: 100vh;
`;

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChange = (e, value) => {
    setActiveTab(value);
  };
  return <TabZone />;
};

export { App };
