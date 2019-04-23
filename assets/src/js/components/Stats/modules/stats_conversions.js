// TODO for all, number type checking
/**
 * Converts a confidence interval into standard deviation.
 * @param {number} upperBound
 * @param {number} lowerBound
 * @param {number} nValue
 * @param {number} ciValuePercent
 * @returns {number}
 */
export function ciToSD(upperBound, lowerBound, nValue, ciValuePercent) {
  let ciMultiplier;
  // Confidence intervals will always be int's, no need for parsefloat
  const numberCiPercent = parseInt(ciValuePercent, 10);
  if (upperBound <= lowerBound) {
    throw new Error('Upper Bound must be larger than the lower.');
  }
  if (numberCiPercent === 90) {
    ciMultiplier = 1.645;
  } else if (numberCiPercent === 95) {
    ciMultiplier = 1.96;
  } else if (numberCiPercent === 98) {
    ciMultiplier = 2.33;
  } else if (numberCiPercent === 99) {
    ciMultiplier = 2.575;
  } else {
    throw new Error('Invalid confidence interval percent.');
  }
  const sdResult = ((upperBound - lowerBound) * Math.sqrt(nValue) / (2 * ciMultiplier));

  return sdResult;
}

/**
 * Calculates standard deviation for many individual points of data
 * @param {number} valueArray
 * @returns {object}
 */
export function multipointMeanSD(valueArray) {
  let sum = 0;
  let rowCount = valueArray.length;
  // TODO get sum
  // TODO check all values are numbers and get mean
  let totalMean = sum / (rowCount - 1);

  let SqrDiffSum = 0;

  // TODO put this function out of its misery.....
  // It gets the square diff or something
  valueArray.each(function () {
    //add only if the value is number
    if (!isNaN(this.value) && this.value.length != 0) {
      SqrDiffSum += Math.pow((parseFloat(this.value) - totalMean), 2);
    }

  });

  const totalSD = Math.sqrt(SqrDiffSum / (rowCount - 1));

  return { totalMean, totalSD };
}

/**
 * Converts an n value into its percent value given the total N and
 * also returns the remaining percent..
 * Example: 3 and 10, returns 30 and 70 representing the percents.
 * @param {number} givenN a subset of N
 * @param {number} totalN total N number
 * @returns {object}
 */
export function nToPercent(givenN, totalN) {
  // TODO negative number protection
  const givenPerc = givenN / totalN * 100;
  const otherPerc = 100 - givenPerc;

  return { givenPerc, otherPerc };
}

/**
 * Converts standard error of the mean to standard deviation
 * @param {number} sem
 * @param {number} nValue
 * @returns {number} sdResult
 */
export function semToSD(sem, nValue) {
  const sdResult = Math.sqrt(nValue) * sem;
  return sdResult;
}

// TODO function for calculating percents of multiple N values
// Example: 3, 4, and 3. Returns 30%, 40%, and 30%.
