import React from "react";
import { useStore } from "../context/useStore";
import { MyStore } from "../context/myStore";
import { Tabs } from "./Tabs";
import { TabList } from "./TabList";
import { Tab } from "./Tab";
import { TabPanels } from "./TabPanels";
import { TabContent } from "./TabContent";

export const TabZone = () => {
  const myStore = useStore();

  return (
    <MyStore.Provider value={myStore}>
      <Tabs>
        <TabList>
          <Tab>
            One
            <h1>Welcome to Tab 1</h1>
          </Tab>
          <Tab>
            Two
            <h1>Welcome to Tab 2</h1>•
          </Tab>
          <Tab>
            Three
            <h1>Welcome to Tab 3</h1>
            <h1>Welcome to Tab 3</h1>
            <h1>Welcome to Tab 3</h1>
            <h1>Welcome to Tab 3</h1>
          </Tab>
        </TabList>

        <TabPanels>
          <TabContent />
        </TabPanels>
      </Tabs>
    </MyStore.Provider>
  );
};
