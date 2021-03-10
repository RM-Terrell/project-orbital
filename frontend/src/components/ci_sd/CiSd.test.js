import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CiSd from './CiSd';
import StatsRequests from '../../modules/StatsRequests';

jest.mock('../../modules/StatsRequests');
const semToSdConvert = jest.fn();
StatsRequests.prototype.semToSdConvert = semToSdConvert;

test(`given the CI SD component is rendered, verify that it has inputs for upper and lower
bounds, n value, percent selector, a submit button and an output.`, () => {
  render(<CiSd />);

  expect(screen.queryByText('Convert', { selector: 'button' })).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Upper Bound')).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Lower Bound')).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('N Value')).toBeInTheDocument();
  expect(screen.queryByTitle('CI to SD Output')).toBeInTheDocument();
  expect(screen.queryByTitle('CI Percent Selector')).toBeInTheDocument();
});

test(`Given the CI SD component is rendered, and has values input for all its input
fields, verify that the input values are present in the DOM.`, async () => {
  render(<CiSd />);
  const upperBoundInput = screen.queryByPlaceholderText('Upper Bound');
  const lowerBoundInput = screen.queryByPlaceholderText('Lower Bound');
  const nValueInput = screen.queryByPlaceholderText('N Value');
  const percentSelector = screen.queryByTitle('CI Percent Selector');
  const lowerBoundValue = '2';
  const upperBounderValue = '5';
  const nValueValue = '10';
  const ciPercentValue = '90';

  fireEvent.change(lowerBoundInput, { target: { value: lowerBoundValue } });
  fireEvent.change(upperBoundInput, { target: { value: upperBounderValue } });
  fireEvent.change(nValueInput, { target: { value: nValueValue } });
  fireEvent.change(percentSelector, { target: { value: ciPercentValue } });

  expect(lowerBoundInput.value).toBe(lowerBoundValue);
  expect(upperBoundInput.value).toBe(upperBounderValue);
  expect(nValueInput.value).toBe(nValueValue);
  expect(percentSelector.value).toBe(ciPercentValue);
});

// todo test default to 95 percent
