import math

from stats_conversions.mathematics.exceptions import (
    NegativeNumberExcpetion,
    InvalidCIPercentageException,
    CIBoundInversionException,
    NToPercentValueInversionException,
)


def sem_to_sd(sem, n_value):
    """
    Converts standard error of the sample mean to standard deviation
    Formula for standard error is: SE = SD / n^-2

    :param int|float sem: standard error of the mean
    :param int n_value: n value, number of points

    :return int|float std_dev: standard deviation
    """
    std_dev = math.sqrt(n_value) * sem

    return std_dev


def ci_to_sd(upper_bound, lower_bound, ci, n):
    """
    Converts a confidence interval, givens its bounds, n, and CI value into SD

    :param int|float upper_bound: upper CI bound
    :param int|float lower_boundL lower CI bound
    :param int ci: confidence interval percent, either 90, 95, 98, or 99
    :param int n: n value

    :return int|float std_dev: the final standard deviation
    """
    ciMultiplier = None
    # Confidence intervals will always be ints
    numberCiPercent = int(ci)
    if upper_bound <= lower_bound:
        raise CIBoundInversionException()
    if numberCiPercent == 90:
        ciMultiplier = 1.645
    elif numberCiPercent == 95:
        ciMultiplier = 1.96
    elif numberCiPercent == 98:
        ciMultiplier = 2.33
    elif numberCiPercent == 99:
        ciMultiplier = 2.575
    else:
        raise InvalidCIPercentageException()

    std_dev = ((upper_bound - lower_bound) * math.sqrt(n) / (2 * ciMultiplier))

    return std_dev


def multipoint_mean_sd(points):
    """
    Convert individual data points into a mean/sd value for those points

    :param [int|float]:
    :return {}: an object containing the mean and sd results
    """
    # handle empty array being passed in
    if len(points) == 0:
        mean_result = ''
        sd_result = ''
    else:
        sum_value = sum(points)

        mean_result = sum_value / len(points)

        sqr_diff = 0
        for point in points:
            sqr_diff += pow((point - mean_result), 2)

        sd_result = math.sqrt(sqr_diff / len(points))

    return {'mean_result': mean_result, 'sd_result': sd_result}


def n_percent(given_n, total_n):
    """
    Convert an n value, relative to another n value into a percent.
    example: what percentage of 200 is 85? 85 is 42.5 percent of 200

    :param int|float given_n:
    :param int|float total_n:
    :return {}: an object containing the percent values
    """

    if given_n < 0 or total_n < 0:
        raise NegativeNumberExcpetion()
    if given_n > total_n:
        raise NToPercentValueInversionException()

    given_perc = given_n / total_n * 100
    other_perc = 100 - given_perc

    return {'given_percent': given_perc, 'other_percent': other_perc}
