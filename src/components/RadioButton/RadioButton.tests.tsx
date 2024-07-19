import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioButton from './RadioButton';

test('renders RadioButton component with label', () => {
  render(<RadioButton label="Test Radio" name="testGroup" value="testValue" />);
  const labelElement = screen.getByText(/Test Radio/i);
  expect(labelElement).toBeVisible();
});

test('RadioButton is checked when passed checked prop', () => {
  render(<RadioButton label="Test Radio" name="testGroup" value="testValue" checked />);
  const inputElement = screen.getByLabelText(/Test Radio/i);
  expect(inputElement).toBeChecked();
});

test('RadioButton calls onChange when clicked', () => {
  const handleChange = jest.fn();
  render(<RadioButton label="Test Radio" name="testGroup" value="testValue" onChange={handleChange} />);
  const inputElement = screen.getByLabelText(/Test Radio/i);
  fireEvent.click(inputElement);
  expect(handleChange).toHaveBeenCalledTimes(1);
});
