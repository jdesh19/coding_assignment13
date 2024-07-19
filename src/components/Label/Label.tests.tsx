import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './Label';

test('renders Label component with text', () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toBeVisible();
});

test('Label has correct htmlFor attribute', () => {
  render(<Label text="Test Label" htmlFor="testInput" />);
  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toHaveAttribute('for', 'testInput');
});
