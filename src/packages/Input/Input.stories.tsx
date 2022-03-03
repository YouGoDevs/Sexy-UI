import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Input Component",
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  sizeVariant: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  sizeVariant: "medium",
};

export const Small = Template.bind({});
Small.args = {
  sizeVariant: "small",
};
