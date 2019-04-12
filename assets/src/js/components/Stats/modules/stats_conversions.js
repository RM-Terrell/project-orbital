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
  if (ciValuePercent === 90) {
    ciMultiplier = 1.645;
  } else if (ciValuePercent === 95) {
    ciMultiplier = 1.96;
  } else if (ciValuePercent === 98) {
    ciMultiplier = 2.33;
  } else if (ciValuePercent === 99) {
    ciMultiplier = 2.575;
  }
  let sdResult = ((upperBound - lowerBound) * Math.sqrt(nValue) / (2 * ciMultiplier));
  sdResult = (Math.round(sdResult * 100) / 100);

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
 * Converts two n values into their relevant percents. Example:
 * 3 and 10, first number is 30% of the second.
 * @param {number} givenN
 * @param {number} totalN
 * @returns {object}
 */
export function nToPercent(givenN, totalN) {
  const givenNPerc = Math.round(1000 * (givenN / totalN * 100)) / 1000;
  const otherPerc = 100 - givenNPerc;

  return { givenNPerc, otherPerc };
}

/**
 * Converts standard error of the mean to standard deviation
 * @param {number} sem
 * @param {numer} nValue
 * @returns {number}
 */
export function semToSD(sem, nValue) {
  return Math.sqrt(nValue) * sem;
}
