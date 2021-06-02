import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'TSC/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary: Story<ButtonProps> = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large: Story<ButtonProps> = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small: Story<ButtonProps> = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
