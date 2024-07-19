import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    htmlFor: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a label',
};
