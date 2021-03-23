import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import MultipointMeanSd from './MultipointMeanSd';
import StatsRequests from '../../modules/StatsRequests';

jest.mock('../../modules/StatsRequests');
const multipointConvert = jest.fn();
StatsRequests.prototype.multipointConvert = multipointConvert;


test(` `, async () => {

});
