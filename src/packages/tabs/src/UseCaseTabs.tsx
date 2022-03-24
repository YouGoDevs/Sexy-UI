import { Tabs } from "./Tabs/Tabs";
import { TabList } from "./TabList/TabList";
import { Tab } from "./Tab/Tab";
import { TabPanels } from "./TabPanels/TabPanels";
import { TabContent } from "./TabContent/TabContent";
import { TitleWrapper } from "./wrappers/TitleWrapper";
import { ContentWrapper } from "./wrappers/ContentWrapper";

export const UseCaseTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <TitleWrapper>One </TitleWrapper>
          <ContentWrapper>
            <p>Welcome to Tab 1</p>
          </ContentWrapper>
        </Tab>
        <Tab>
          <TitleWrapper>Two </TitleWrapper>
          <ContentWrapper>
            <p>Welcome to Tab 2</p>
          </ContentWrapper>
        </Tab>
        <Tab>
          <TitleWrapper>Three </TitleWrapper>
          <ContentWrapper>
            <p>Welcome to Tab 3</p>
          </ContentWrapper>
        </Tab>
      </TabList>

      <TabPanels>
        <TabContent />
      </TabPanels>
    </Tabs>
  );
};
