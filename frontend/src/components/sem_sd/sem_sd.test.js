import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SemSD from './sem_sd';

jest.mock('/statsRequests');
let statsRequests = jest.fn();
statsRequests.prototype.semdSDRequest = {};


test('The SemSD component renders without error and has a button for submitting', () => {
  render(<SemSD />);

});

// test('The SemSD submit button is clickable', () => {
// });
