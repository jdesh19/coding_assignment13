import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

test('renders Dropdown component with options', () => {
  render(<Dropdown options={options} />);
  const optionElement = screen.getByText(/Option 1/i);
  expect(optionElement).toBeVisible();
});

test('calls onChange when an option is selected', () => {
  const handleChange = jest.fn();
  render(<Dropdown options={options} onChange={handleChange} />);
  const selectElement = screen.getByRole('combobox');
  fireEvent.change(selectElement, { target: { value: 'option1' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(selectElement).toHaveValue('option1');
});

test('renders placeholder correctly', () => {
  render(<Dropdown options={options} placeholder="Select an option" />);
  const placeholderElement = screen.getByText(/Select an option/i);
  expect(placeholderElement).toBeInTheDocument();
});
