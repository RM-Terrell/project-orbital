/* eslint-disable no-undef */
import { semToSD, nToPercent, multipointMeanSD, ciToSD } from '../modules/stats_conversions';

test('SEM to SD small N, round SEM', () => {
  const nvalue = 20;
  const sem = 3;
  const expectedSD = 13.4164;
  expect(semToSD(sem, nvalue)).toBeCloseTo(expectedSD);
});

test('SEM to SD larger N, decimal SEM', () => {
  const nvalue = 145;
  const sem = 2.5;
  const expectedSD = 30.103;
  expect(semToSD(sem, nvalue)).toBeCloseTo(expectedSD);
});

test('SEM to SD very large N decimal SEM', () => {
  const nvalue = 1254;
  const sem = 8.154;
  const expectedSD = 288.748;
  expect(semToSD(sem, nvalue)).toBeCloseTo(expectedSD);
});

// TODO throw negative and strings at SEM converter

test('N converts to percent, rounder numbers', () => {
  const givenN = 2;
  const totalN = 10;
  const expectedGivenPerc = 20;
  const expectedOtherPerc = 80;
  expect(nToPercent(givenN, totalN).givenPerc).toBe(expectedGivenPerc);
  expect(nToPercent(givenN, totalN).otherPerc).toBe(expectedOtherPerc);
});

test('N converts to percent, decimal numbers', () => {
  const givenN = 2.5;
  const totalN = 10;
  const expectedGivenPerc = 25;
  const expectedOtherPerc = 75;
  expect(nToPercent(givenN, totalN).givenPerc).toBe(expectedGivenPerc);
  expect(nToPercent(givenN, totalN).otherPerc).toBe(expectedOtherPerc);
});

test('N converts to percent, large decimal numbers', () => {
  const givenN = 85;
  const totalN = 200;
  const expectedGivenPerc = 42.5;
  const expectedOtherPerc = 57.5;
  expect(nToPercent(givenN, totalN).givenPerc).toBe(expectedGivenPerc);
  expect(nToPercent(givenN, totalN).otherPerc).toBe(expectedOtherPerc);
});

// TODO throw negative and strings at N to Perc converter

test('CI to SD, small round numbers, 90', () => {
  const upperBound = 10;
  const lowerBound = 2;
  const nValue = 20;
  const ciPercent = 90;

  const expectedSD = 10.874494;
  expect(ciToSD(upperBound, lowerBound, nValue, ciPercent)).toBeCloseTo(expectedSD);
});

test('CI to SD, small round numbers, 95', () => {
  const upperBound = 10;
  const lowerBound = 2;
  const nValue = 20;
  const ciPercent = 95;

  const expectedSD = 9.126808;
  expect(ciToSD(upperBound, lowerBound, nValue, ciPercent)).toBeCloseTo(expectedSD);
});

test('CI to SD, small round numbers, 98', () => {
  const upperBound = 10;
  const lowerBound = 2;
  const nValue = 20;
  const ciPercent = 98;

  const expectedSD = 7.6774;
  expect(ciToSD(upperBound, lowerBound, nValue, ciPercent)).toBeCloseTo(expectedSD);
});

test('CI to SD, small round numbers, 99', () => {
  const upperBound = 10;
  const lowerBound = 2;
  const nValue = 20;
  const ciPercent = 99;

  const expectedSD = 6.94700;
  expect(ciToSD(upperBound, lowerBound, nValue, ciPercent)).toBeCloseTo(expectedSD);
});

test('CI to SD, invalid Confidence Interval percent', () => {
  const upperBound = 10;
  const lowerBound = 2;
  const nValue = 20;
  const ciPercent = 42;

  const expectedError = 'Invalid confidence interval percent.';
  function testCiThrow() {
    ciToSD(upperBound, lowerBound, nValue, ciPercent);
  }
  expect(testCiThrow).toThrowError(new Error(expectedError));
});

test('CI to SD, invalid Confidence Interval bound sizes', () => {
  const upperBound = 2;
  const lowerBound = 10;
  const nValue = 20;
  const ciPercent = 95;

  const expectedError = 'Upper Bound must be larger than the lower.';
  function testCiThrow() {
    ciToSD(upperBound, lowerBound, nValue, ciPercent);
  }
  expect(testCiThrow).toThrowError(new Error(expectedError));
});
