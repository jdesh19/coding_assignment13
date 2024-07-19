import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    color: { control: 'color' },
    bold: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Text',
  size: 'medium',
  color: '#619',
  bold: false,
};

export const BoldText = Template.bind({});
BoldText.args = {
  children: 'Bold Text',
  size: 'medium',
  color: '#619',
  bold: true,
};

export const LargeText = Template.bind({});
LargeText.args = {
  children: 'Large Text',
  size: 'large',
  color: '#619',
  bold: false,
};
