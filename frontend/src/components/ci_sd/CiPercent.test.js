import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CiPercent from './CiPercent';

const mockedHandleChange = jest.fn();

test(`Given the CI Percent component is rendered with a starting value of
90, verify that it loads to the page with that value selected.`, async () => {
  const value = '90';
  render(<CiPercent handleChange={mockedHandleChange} percentValue={value} />);
  expect(screen.queryByTitle('CI Percent Selector')).toHaveValue(value);
});

test(`Given the CI Percent component is rendered with a starting value of
95, verify that it loads to the page with that value selected.`, async () => {
  const value = '95';
  render(<CiPercent handleChange={mockedHandleChange} percentValue={value} />);
  expect(screen.queryByTitle('CI Percent Selector')).toHaveValue(value);
});

test(`Given the CI Percent component is rendered with a starting value of
98, verify that it loads to the page with that value selected.`, async () => {
  const value = '98';
  render(<CiPercent handleChange={mockedHandleChange} percentValue={value} />);
  expect(screen.queryByTitle('CI Percent Selector')).toHaveValue(value);
});

test(`Given the CI Percent component is rendered with a starting value of
99, verify that it loads to the page with that value selected.`, async () => {
  const value = '99';
  render(<CiPercent handleChange={mockedHandleChange} percentValue={value} />);
  expect(screen.queryByTitle('CI Percent Selector')).toHaveValue(value);
});
