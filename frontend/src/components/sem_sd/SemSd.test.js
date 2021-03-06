import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SemSD from './SemSd';
import StatsRequests from '../../modules/StatsRequests';
import { serverErrorMessage } from '../../modules/messaging';

jest.mock('../../modules/StatsRequests');
const semToSdConvert = jest.fn();
StatsRequests.prototype.semToSdConvert = semToSdConvert;


test(`Given the SEM to SD component is rendered, verify that it renders two inputs, an output
and a button for submitting the inputs.`, () => {
  render(<SemSD />);

  expect(screen.queryByText('Convert', { selector: 'button' })).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('N Value')).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('SEM Value')).toBeInTheDocument();
  expect(screen.queryByText('Standard Deviation:')).toBeInTheDocument();
});

test(`Given the SEM to SD component is rendered and values are input into the input
fields, verify they update with the correct values.`, async () => {
  const nValue = '123';
  const semValue = '456';
  render(<SemSD />);

  const nValueInput = screen.queryByPlaceholderText('N Value');
  const semValueInput = screen.queryByPlaceholderText('SEM Value');
  fireEvent.change(nValueInput, { target: { value: nValue } });
  fireEvent.change(semValueInput, { target: { value: semValue } });

  expect(nValueInput.value).toBe(nValue);
  expect(semValueInput.value).toBe(semValue);
});

test(`Given the SEM to SD component is rendered, has values input in its input fields and its submit
button is clicked, verify that the method for handling its REST call is called with the input values.`, async () => {
  const expectedResult = '517';
  const mockedReturnValue = { sd_result: expectedResult };
  const nValue = '123';
  const semValue = '456';
  semToSdConvert.mockImplementationOnce(() => mockedReturnValue);
  render(<SemSD />);

  const nValueInput = screen.queryByPlaceholderText('N Value');
  const semValueInput = screen.queryByPlaceholderText('SEM Value');
  fireEvent.change(nValueInput, { target: { value: nValue } });
  fireEvent.change(semValueInput, { target: { value: semValue } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(expectedResult);

  expect(semToSdConvert).toBeCalledTimes(1);
  expect(semToSdConvert).toHaveBeenCalledWith(semValue, nValue);
});

test(`Given the SEM to SD component is rendered, has values input in its input fields and its submit
button is clicked, but no body response is returned, verify that an error is logged to console
and an error is presented to the user.`, async () => {
  const nValue = '123';
  const semValue = '456';
  const errorMessage = serverErrorMessage;
  global.console = { error: jest.fn() };
  semToSdConvert.mockImplementationOnce(() => {});

  render(<SemSD />);

  const nValueInput = screen.queryByPlaceholderText('N Value');
  const semValueInput = screen.queryByPlaceholderText('SEM Value');
  fireEvent.change(nValueInput, { target: { value: nValue } });
  fireEvent.change(semValueInput, { target: { value: semValue } });

  fireEvent.click(screen.queryByText('Convert', { selector: 'button' }));
  await screen.findByText(errorMessage);

  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(errorMessage);
});
