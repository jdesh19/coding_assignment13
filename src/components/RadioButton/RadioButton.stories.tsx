import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(args.checked ? args.value : undefined);
  return (
    <RadioButton
      {...args}
      checked={selectedValue === args.value}
      onChange={(e) => setSelectedValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'radioGroup',
  value: 'value1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'radioGroup',
  value: 'value2',
  disabled: true,
};
