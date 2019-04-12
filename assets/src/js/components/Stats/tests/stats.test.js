/* eslint-disable no-undef */
import { semToSD, nToPercent, multipointMeanSD, ciToSD } from '../modules/stats_conversions';

test('SEM to SD small round numbers', () => {
  const nvalue = 20;
  const sem = 3;
  const expectedSD = 13.4164;
  expect(semToSD(sem, nvalue)).toBeCloseTo(expectedSD);
});

test('SEM to SD larger decimal numbers', () => {
  const nvalue = 145;
  const sem = 2.5;
  const expectedSD = 30.103;
  expect(semToSD(sem, nvalue)).toBeCloseTo(expectedSD);
});

test('SEM to SD very large decimal numbers', () => {
  const nvalue = 1254;
  const sem = 8.154;
  const expectedSD = 288.748;
  expect(semToSD(sem, nvalue)).toBeCloseTo(expectedSD);
});
