import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import NToPercent from './NPercent';
import StatsRequests from '../../modules/StatsRequests';

jest.mock('../../modules/StatsRequests');
const nPercentConvert = jest.fn();
StatsRequests.prototype.nPercentConvert = nPercentConvert;


test(` `, async () => {

});

// todo test error message return rendering
