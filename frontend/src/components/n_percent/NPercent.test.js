import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import NToPercent from './NPercent';
import StatsRequests from '../../modules/StatsRequests';
import { serverErrorMessage } from '../../modules/messaging';

jest.mock('../../modules/StatsRequests');
const nPercentConvert = jest.fn();
StatsRequests.prototype.nPercentConvert = nPercentConvert;


test(`Given the N to Percent component is rendered, verify it has its two inputs, two outputs,
and a convert button. `, async () => {
  render(<NToPercent />);

  expect(screen.queryByText('Convert', { selector: 'button' })).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Given N Value')).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Total N Value')).toBeInTheDocument();
  expect(screen.queryByText('Given N Percent:')).toBeInTheDocument();
  expect(screen.queryByText('Other N Percent:')).toBeInTheDocument();
});

test(`Given the N Percent component is rendered and values are input into the input
fields, verify they update with the correct values.`, async () => {
  const givenN = '5';
  const totalN = '10';

  render(<NToPercent />);

  const givenNInput = screen.queryByPlaceholderText('Given N Value');
  const totalNInput = screen.queryByPlaceholderText('Total N Value');
  fireEvent.change(givenNInput, { target: { value: givenN } });
  fireEvent.change(totalNInput, { target: { value: totalN } });

  expect(givenNInput.value).toBe(givenN);
  expect(totalNInput.value).toBe(totalN);
});

test(`Given the N Percent component is rendered, values are input into its input fields, and its
submit button is clicked, verify that the method for handling its REST call is called with the
input values and that the expected mocked values are rendered to the screen.`, async () => {
  const givenN = '4';
  const totalN = '10';
  const expectedGivenResult = '40';
  const expectedOtherResult = '60';
  const mockedReturnValue = {
    given_percent: expectedGivenResult,
    other_percent: expectedOtherResult,
  };
  nPercentConvert.mockImplementationOnce(() => mockedReturnValue);

  render(<NToPercent />);

  const givenNInput = screen.queryByPlaceholderText('Given N Value');
  const totalNInput = screen.queryByPlaceholderText('Total N Value');
  fireEvent.change(givenNInput, { target: { value: givenN } });
  fireEvent.change(totalNInput, { target: { value: totalN } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(expectedGivenResult);
  await screen.findByText(expectedOtherResult);

  expect(nPercentConvert).toBeCalledTimes(1);
  expect(nPercentConvert).toHaveBeenCalledWith(givenN, totalN);
});

test(`Given the N Percent component is rendered, values are input into its input fields, and its
submit button is clicked, but no body response is returned, verify that an error is logged to console
and an error is presented to the user.`, async () => {
  const givenN = '4';
  const totalN = '10';
  const errorMessage = serverErrorMessage;
  global.console = { error: jest.fn() };
  nPercentConvert.mockImplementationOnce(() => {});

  render(<NToPercent />);

  const givenNInput = screen.queryByPlaceholderText('Given N Value');
  const totalNInput = screen.queryByPlaceholderText('Total N Value');
  fireEvent.change(givenNInput, { target: { value: givenN } });
  fireEvent.change(totalNInput, { target: { value: totalN } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(errorMessage);

  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(errorMessage);
});

test(`Given the N Percent component is rendered, values are input into its input fields, and its
submit button is clicked, but the response contains an error message,
verify that the error message is displayed.`, async () => {
  const givenN = '4';
  const totalN = '10';

  const errorMessage = 'Testing error message';
  const mockedReturnValue = {
    given_percent: '',
    other_percent: '',
    error_message: errorMessage,
  };
  nPercentConvert.mockImplementationOnce(() => mockedReturnValue);

  render(<NToPercent />);

  const givenNInput = screen.queryByPlaceholderText('Given N Value');
  const totalNInput = screen.queryByPlaceholderText('Total N Value');
  fireEvent.change(givenNInput, { target: { value: givenN } });
  fireEvent.change(totalNInput, { target: { value: totalN } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(errorMessage);
});
