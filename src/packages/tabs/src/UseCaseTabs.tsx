import { Tabs } from "./Tabs";
import { TabList } from "./TabList";
import { Tab } from "./Tab";
import { TabPanels } from "./TabPanels";
import { TabContent } from "./TabContent";

export const UseCaseTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          One
          <p>Welcome to Tab 1</p>
        </Tab>
        <Tab>
          <div>Two</div>
          <div>
            Welcome to Tab 2<p>How's college treating you these days?</p>
          </div>
        </Tab>
        <Tab>
          Three
          <h1>Welcome to Tab 3</h1>
        </Tab>
      </TabList>

      <TabPanels>
        <TabContent />
      </TabPanels>
    </Tabs>
  );
};
