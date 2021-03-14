class NegativeNumberExcpetion(Exception):
    """
    Raised when a negative number is detected where one shouldn't be
    """
    pass


class CIBoundInversionException(Exception):
    """
    Raised when the lower bound is larger than the upper bound in a confidence
    interval conversion
    """
    pass


class InvalidCIPercentageException(Exception):
    """
    Raised when an invalid confidence interval percentage is used
    """
    pass


class NToPercentValueInversionException(Exception):
    """
    Raised when the given n is larger than the total n for converting n values to percents
    """
    pass
