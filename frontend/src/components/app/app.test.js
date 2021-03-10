import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './app';

test(`Given the main app component is rendered, verify that the single and
mulitpoint conversions elements are displayed.`, async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  screen.debug();
  expect(screen.queryByText('Single Point Conversions')).toBeInTheDocument();
  expect(screen.queryByText('Multi Point Conversions')).toBeInTheDocument();
  expect(screen.queryByText('Project Orbital')).toBeInTheDocument();
});
