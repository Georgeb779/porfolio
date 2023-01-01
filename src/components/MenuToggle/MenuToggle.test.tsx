import '@testing-library/jest-dom';

import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { MenuToggle } from './index';

test('renders MenuToggle component', () => {
  render(<MenuToggle isOpen={true} />);
  const element = screen.getByTestId('menu-toggle');
  expect(element).toBeInTheDocument();
});

afterEach(cleanup);
