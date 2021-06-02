import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "./index";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Hello</Button>;

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {};
