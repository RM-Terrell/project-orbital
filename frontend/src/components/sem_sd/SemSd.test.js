import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SemSD from './SemSd';
import StatsRequests from '../../modules/StatsRequests';

jest.mock('../../modules/StatsRequests');
const semSdPost = jest.fn();
StatsRequests.prototype.semSdPost = semSdPost;


test(`Given the SEM to SD component is rendered, verify that it renders two inputs, an output
and a button for submitting the inputs.`, () => {
  render(<SemSD />);

  expect(screen.queryByText('SEM to SD', { selector: 'button' })).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('N Value')).toBeInTheDocument();
  expect(screen.queryByPlaceholderText('SEM Value')).toBeInTheDocument();
  expect(screen.queryByTitle('SEM SD Output')).toBeInTheDocument();
});

test(`Given the SEM to SD component is rendered and values are input into the input
fields, verify they update with the correct values.`, async () => {
  render(<SemSD />);

  const nValueInput = screen.queryByPlaceholderText('N Value');
  const semValueInput = screen.queryByPlaceholderText('SEM Value');
  fireEvent.change(nValueInput, { target: { value: '123' } });
  fireEvent.change(semValueInput, { target: { value: '456' } });
  expect(nValueInput.value).toBe('123');
  expect(semValueInput.value).toBe('456');
});

test(`Given the SEM to SD component is rendered, has values input in its input fields and its submit
button is clicked, verify that the method for handling its REST call is called with the input values.`, async () => {
  const mockedReturnValue = { sd_result: 2 };
  const nValue = '123';
  const semValue = '456';
  semSdPost.mockImplementationOnce(() => mockedReturnValue);
  render(<SemSD />);

  const nValueInput = screen.queryByPlaceholderText('N Value');
  const semValueInput = screen.queryByPlaceholderText('SEM Value');
  fireEvent.change(nValueInput, { target: { value: nValue } });
  fireEvent.change(semValueInput, { target: { value: semValue } });

  fireEvent.click(screen.queryByText('SEM to SD', { selector: 'button' }));
  expect(semSdPost).toBeCalledTimes(1);
  expect(semSdPost).toHaveBeenCalledWith(semValue, nValue);
});

test(`Given the SEM to SD component is rendered, has values input in its input fields and its submit
button is clicked, but no body is response is returned, verify that an error is logged to console
and an error is presented to the user in the output field.`, async () => {
  const nValue = '123';
  const semValue = '456';
  const errorMessage = 'No response returned by the server';
  global.console = { error: jest.fn() };
  semSdPost.mockImplementationOnce(() => {});
  render(<SemSD />);

  const nValueInput = screen.queryByPlaceholderText('N Value');
  const semValueInput = screen.queryByPlaceholderText('SEM Value');
  fireEvent.change(nValueInput, { target: { value: nValue } });
  fireEvent.change(semValueInput, { target: { value: semValue } });

  fireEvent.click(screen.queryByText('SEM to SD', { selector: 'button' }));
  await screen.findByText(errorMessage);
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(errorMessage);
});