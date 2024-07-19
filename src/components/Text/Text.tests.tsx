import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Text from './Text';

test('renders Text component with content', () => {
  render(<Text>Test Text</Text>);
  const textElement = screen.getByText(/Test Text/i);
  expect(textElement).toBeVisible();
});

test('Text component has correct size', () => {
  render(<Text size="large">Test Text</Text>);
  const textElement = screen.getByText(/Test Text/i);
  expect(textElement).toHaveStyle('font-size: 24px');
});

test('Text component is bold', () => {
  render(<Text bold>Bold Text</Text>);
  const textElement = screen.getByText(/Bold Text/i);
  expect(textElement).toHaveStyle('font-weight: bold');
});
