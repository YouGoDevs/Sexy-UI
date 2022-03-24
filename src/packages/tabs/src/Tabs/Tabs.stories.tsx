import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "./Tabs";
import { TabList } from "../TabList/TabList";
import { TitleWrapper } from "../wrappers/TitleWrapper";
import { Tab } from "../Tab/Tab";
import { ContentWrapper } from "../wrappers/ContentWrapper";
import { TabPanels } from "../TabPanels/TabPanels";
import { TabContent } from "../TabContent/TabContent";

export default {
  title: "Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: "Tabs Component",
      },
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
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

export const ExampleTab = Template.bind({});
