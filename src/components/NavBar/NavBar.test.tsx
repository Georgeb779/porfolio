import '@testing-library/jest-dom';

import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { NavBar } from './index';

test('renders MenuToggle component', () => {
  render(<NavBar />);
  const element = screen.getByTestId('svg');
  expect(element).toBeInTheDocument();
});

afterEach(cleanup);
