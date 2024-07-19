import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders Button component', () => {
  render(<Button label="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeVisible();
});

test('Button is disabled and greyed out', () => {
  render(<Button label="Click Me" disabled />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toHaveStyle('background-color: grey');
  expect(buttonElement).toHaveStyle('cursor: not-allowed');
});
