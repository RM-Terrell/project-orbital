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

  return (totalMean, totalSD);
}

export function nToPercent(givenN, totalN) {
  let givenNPerc = Math.round(1000 * (givenN / totalN * 100)) / 1000;
  let otherPerc = 100 - givenNPerc;

  return (givenNPerc, otherPerc);
}

export function semToSD(sem, nValue) {
  const sdResult = Math.round(Math.sqrt(nValue)) * (sem * 100) / 100;
  return sdResult;
}
