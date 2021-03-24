import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import MultipointMeanSd from './MultipointMeanSd';
import StatsRequests from '../../modules/StatsRequests';
import { serverErrorMessage } from '../../modules/messaging';

jest.mock('../../modules/StatsRequests');
const multipointConvert = jest.fn();
StatsRequests.prototype.multipointConvert = multipointConvert;


test(`Given the Multipoint component is rendered, verify that it has its input, convert button,
and output.`, async () => {
  render(<MultipointMeanSd />);

  expect(screen.queryByText('Convert', { selector: 'button' })).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('Values')).toBeInTheDocument();
  expect(screen.queryByText('Mean:')).toBeInTheDocument();
  expect(screen.queryByText('Standard Deviation:')).toBeInTheDocument();
});

test(`Given the Multipoint component is rendered and values are input, verify
that the input updates with the correct values.`, async () => {
  const values = '1,2,3,4';

  render(<MultipointMeanSd />);

  const input = screen.queryByPlaceholderText('Values');

  fireEvent.change(input, { target: { value: values } });

  expect(input.value).toBe(values);
});

test(`Given the Multipoint component has comma separated values input and submitted,
verify that the method for handling its REST call is called with the expected array
of values and that the expected mocked values are rendered to the screen.`, async () => {
  const values = '2,3,1,4';
  const expectedValues = ['2', '3', '1', '4'];
  const mockedMean = '2';
  const mockedSD = '1';
  const mockedReturnValue = {
    mean_result: mockedMean,
    sd_result: mockedSD,
  };
  multipointConvert.mockImplementationOnce(() => mockedReturnValue);

  render(<MultipointMeanSd />);

  const inputField = screen.queryByPlaceholderText('Values');
  fireEvent.change(inputField, { target: { value: values } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(mockedMean);
  await screen.findByText(mockedSD);

  expect(multipointConvert).toBeCalledTimes(1);
  expect(multipointConvert).toHaveBeenCalledWith(expectedValues);
});

test(`Given the Multipoint component has space separated values input and submitted,
verify that the method for handling its REST call is called with the expected array
of values and that the expected mocked values are rendered to the screen.`, async () => {
  const values = '2 3 1 4';
  const expectedValues = ['2', '3', '1', '4'];
  const mockedMean = '2';
  const mockedSD = '1';
  const mockedReturnValue = {
    mean_result: mockedMean,
    sd_result: mockedSD,
  };
  multipointConvert.mockImplementationOnce(() => mockedReturnValue);

  render(<MultipointMeanSd />);

  const inputField = screen.queryByPlaceholderText('Values');
  fireEvent.change(inputField, { target: { value: values } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(mockedMean);
  await screen.findByText(mockedSD);

  expect(multipointConvert).toBeCalledTimes(1);
  expect(multipointConvert).toHaveBeenCalledWith(expectedValues);
});

test(`Given the Mutlipoint component has values input, but on submit no body response is returned,
verify an error message is shown.`, async () => {
  const values = '2 3 1 4';
  const errorMessage = serverErrorMessage;
  global.console = { error: jest.fn() };
  multipointConvert.mockImplementationOnce(() => {});

  render(<MultipointMeanSd />);
  const inputField = screen.queryByPlaceholderText('Values');
  fireEvent.change(inputField, { target: { value: values } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(errorMessage);

  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(errorMessage);
});
