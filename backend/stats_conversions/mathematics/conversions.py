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
