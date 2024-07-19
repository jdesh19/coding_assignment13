import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    selectedValue: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(args.selectedValue);

  return (
    <Dropdown
      {...args}
      selectedValue={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select an option',
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select an option',
  disabled: true,
};
