import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CiSd from './CiSd';
import StatsRequests from '../../modules/StatsRequests';
import { serverErrorMessage } from '../../modules/messaging';

jest.mock('../../modules/StatsRequests');
const ciToSdConvert = jest.fn();
StatsRequests.prototype.ciToSdConvert = ciToSdConvert;

test(`Given the CI SD component is rendered, verify that it has inputs for upper and lower
bounds, n value, percent selector, a submit button and an output.`, () => {
  render(<CiSd />);

  expect(screen.queryByText('Convert', { selector: 'button' })).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Upper Bound')).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Lower Bound')).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('N Value')).toBeInTheDocument();
  expect(screen.queryByText('Standard Deviation:')).toBeInTheDocument();
  expect(screen.queryByTitle('CI Percent Selector')).toBeInTheDocument();
});

test(`Given the CI SD component is rendered, and has values input for all its input
fields, verify that the input values are present in the DOM.`, async () => {
  const upper = '5';
  const lower = '2';
  const n = '10';
  const percent = '90';

  render(<CiSd />);

  const upperInput = screen.queryByPlaceholderText('Upper Bound');
  const lowerInput = screen.queryByPlaceholderText('Lower Bound');
  const nValueInput = screen.queryByPlaceholderText('N Value');
  const percentInput = screen.queryByTitle('CI Percent Selector');

  fireEvent.change(upperInput, { target: { value: upper } });
  fireEvent.change(lowerInput, { target: { value: lower } });
  fireEvent.change(nValueInput, { target: { value: n } });
  fireEvent.change(percentInput, { target: { value: percent } });

  expect(lowerInput.value).toBe(lower);
  expect(upperInput.value).toBe(upper);
  expect(nValueInput.value).toBe(n);
  expect(percentInput.value).toBe(percent);
});

test(`Given the CI SD component is rendered, verify that its percent selector defaults
to 95.`, () => {
  render(<CiSd />);

  expect(screen.queryByTitle('CI Percent Selector')).toBeInTheDocument();
  expect(screen.queryByDisplayValue('95')).toBeInTheDocument();
});

test(`Given the CI SD component is rendered with all its needed and valid inputs, verify that
when the submit button is clicked the method for making its rest call is called with the
correct values, and the return value is rendered to screen.`, async () => {
  const expectedResult = '517';
  const mockedReturnValue = { sd_result: expectedResult };
  const upper = '5';
  const lower = '2';
  const n = '10';
  const percent = '90';

  ciToSdConvert.mockImplementationOnce(() => mockedReturnValue);

  render(<CiSd />);

  const upperInput = screen.queryByPlaceholderText('Upper Bound');
  const lowerInput = screen.queryByPlaceholderText('Lower Bound');
  const nValueInput = screen.queryByPlaceholderText('N Value');
  const percentInput = screen.queryByTitle('CI Percent Selector');

  fireEvent.change(upperInput, { target: { value: upper } });
  fireEvent.change(lowerInput, { target: { value: lower } });
  fireEvent.change(nValueInput, { target: { value: n } });
  fireEvent.change(percentInput, { target: { value: percent } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(expectedResult);

  expect(ciToSdConvert).toBeCalledTimes(1);
  expect(ciToSdConvert).toHaveBeenCalledWith(upper, lower, n, percent);
});

test(`Given the CI SD component is rendered with all its needed and valid inputs,
has values input in its input fields and its submit button is clicked, but no body is
response is returned, verify that an error is logged to console and an error is presented
to the user in the output field.`, async () => {
  const errorMessage = serverErrorMessage;
  const upper = '5';
  const lower = '2';
  const n = '10';
  const percent = '90';
  global.console = { error: jest.fn() };
  ciToSdConvert.mockImplementationOnce(() => {});

  render(<CiSd />);

  const upperInput = screen.queryByPlaceholderText('Upper Bound');
  const lowerInput = screen.queryByPlaceholderText('Lower Bound');
  const nValueInput = screen.queryByPlaceholderText('N Value');
  const percentInput = screen.queryByTitle('CI Percent Selector');

  fireEvent.change(upperInput, { target: { value: upper } });
  fireEvent.change(lowerInput, { target: { value: lower } });
  fireEvent.change(nValueInput, { target: { value: n } });
  fireEvent.change(percentInput, { target: { value: percent } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(errorMessage);

  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(errorMessage);
});
