import math


# Code for converting between statistical result types.
# For example Standard Deviation to Standard Error, Confidence Interval to Standard Deviation, etc

def sem_to_sd(sem, n_value):
    """
    Converts standard error of the sample mean to standard deviation
    Formula for standard error is: SE = SD / n^-2

    :param int sem: standard error of the mean
    :param in n_value: n value, number of points

    :return int std_dev: standard deviation
    """
    std_dev = math.sqrt(n_value) * sem

    return std_dev


def ci_to_sd(upper_bound, lower_bound, ci, n):
    """
    Converts a confidence interval, givens its bounds, n, and CI value into SD

    :param int upper_bound: upper CI bound
    :param int lower_boundL lower CI bound
    :param int ci: confidence interval percent, either 90, 95, 98, or 99
    :param int n: n value

    :return in std_dev: the final standard deviation
    """
    ciMultiplier = None
    # Confidence intervals will always be ints
    numberCiPercent = int(ci)
    if upper_bound <= lower_bound:
        return 'Upper bound must be larger than the lower.'
    if numberCiPercent == 90:
        ciMultiplier = 1.645
    elif numberCiPercent == 95:
        ciMultiplier = 1.96
    elif numberCiPercent == 98:
        ciMultiplier = 2.33
    elif numberCiPercent == 99:
        ciMultiplier = 2.575
    else:
        return 'Invalid confidence interval percent.'

    std_dev = ((upper_bound - lower_bound) * math.sqrt(n) / (2 * ciMultiplier))

    return std_dev


def multipoint_mean_sd(points):
    """
    TODO
    """
    # handle empty array being passed in
    if points.length == 0:
        return {}

    sum_value = sum(points)

    mean_result = sum_value / points.length

    sqr_diff = 0
    for point in points:
        sqr_diff += pow((point - mean_result), 2)

    sd_result = math.sqrt(sqr_diff / points.length)

    return {mean_result, sd_result}


def n_percent(given_n, total_n):
    """
    TODO
    """
    # TODO negative number protection
    given_perc = given_n / total_n * 100
    other_perc = 100 - given_perc

    return {given_perc, other_perc}
