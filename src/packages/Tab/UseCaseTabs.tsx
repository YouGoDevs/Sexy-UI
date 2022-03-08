import { Tabs } from "./Tabs";
import { TabList } from "./TabList";
import { Tab } from "./Tab";
import { TabPanels } from "./TabPanels";
import { TabContent } from "./TabContent";
import { TitleWrapper } from "./TitleWrapper";
import { ContentWrapper } from "./ContentWrapper";

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
