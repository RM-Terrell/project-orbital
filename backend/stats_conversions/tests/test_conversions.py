from django.test import TestCase

from stats_conversions.mathematics.conversions import (
    sem_to_sd,
    ci_to_sd,
    multipoint_mean_sd,
    n_percent)
from stats_conversions.mathematics.exceptions import (
    NegativeNumberExcpetion,
    CIBoundInversionException,
    InvalidCIPercentageException,
    NToPercentValueInversionException,
)


class SemToSdTests(TestCase):
    """
    Test for verifying the behavior of the module for converting
    Standard Error of the Sample Mean to Standard Deviation
    """
    def test_single_digit_n_1(self):
        """
        Given a SEM of 2, and an N of 5,
        verify that the conversion to SD is 4.4721
        """
        sem_value = 2
        n_value = 5
        expected_result = 4.4721
        result = sem_to_sd(sem_value, n_value)

        self.assertAlmostEqual(expected_result, result, 4)

    def test_single_digit_n_2(self):
        """
        Given a SEM of 3, and an N of 20,
        verify that the conversion to SD is 13.4164
        """
        sem_value = 3
        n_value = 20
        expected_result = 13.4164
        result = sem_to_sd(sem_value, n_value)

        self.assertAlmostEqual(expected_result, result, 4)

    def test_single_digit_n_3(self):
        """
        Given a SEM of 2.5, and an N of 145,
        verify that the conversion to SD is 30.1039
        """
        sem_value = 2.5
        n_value = 145
        expected_result = 30.10398
        result = sem_to_sd(sem_value, n_value)

        self.assertAlmostEqual(expected_result, result, 4)


class CiToSdTests(TestCase):
    """
    Test for verifying the behavior of the module for converting Confidence Intervals
    to Standard Deviation
    """

    def test_small_round_numbers_90_percent(self):
        """
        Given upper and lower bounds that are small, and a value of 90 for the CI percent,
        verify that the returned result is correct.
        """
        upper_bound = 10
        lower_bound = 2
        n_value = 20
        ci_percent = 90
        expected_result = 10.874494
        result = ci_to_sd(upper_bound, lower_bound, ci_percent, n_value)

        self.assertAlmostEqual(expected_result, result, 4)

    def test_small_round_numbers_95_percent(self):
        """
        Given upper and lower bounds that are small, and a value of 95 for the CI percent,
        verify that the returned result is correct.
        """
        upper_bound = 10
        lower_bound = 2
        n_value = 20
        ci_percent = 95
        expected_result = 9.12680
        result = ci_to_sd(upper_bound, lower_bound, ci_percent, n_value)

        self.assertAlmostEqual(expected_result, result, 4)

    def test_small_round_numbers_98_percent(self):
        """
        Given upper and lower bounds that are small, and a value of 98 for the CI percent,
        verify that the returned result is correct.
        """
        upper_bound = 10
        lower_bound = 2
        n_value = 20
        ci_percent = 98
        expected_result = 7.67748
        result = ci_to_sd(upper_bound, lower_bound, ci_percent, n_value)

        self.assertAlmostEqual(expected_result, result, 4)

    def test_small_round_numbers_99_percent(self):
        """
        Given upper and lower bounds that are small, and a value of 99 for the CI percent,
        verify that the returned result is correct.
        """
        upper_bound = 10
        lower_bound = 2
        n_value = 20
        ci_percent = 99
        expected_result = 6.94700
        result = ci_to_sd(upper_bound, lower_bound, ci_percent, n_value)

        self.assertAlmostEqual(expected_result, result, 4)

    def test_small_invalid_percent(self):
        """
        Given an invalid percent of 53 (expecting 90,95,98,99), verify that the conversion
        raises an exception for an invalid percent
        """
        upper_bound = 10
        lower_bound = 2
        n_value = 20
        ci_percent = 53

        with self.assertRaises(InvalidCIPercentageException):
            ci_to_sd(upper_bound, lower_bound, ci_percent, n_value)

    def test_small_invalid_bounds(self):
        """
        Given an upper bound confidence interval smaller than the lower bound, verify that
        the conversion raise an excpetion for inverted bounds
        """
        upper_bound = 2
        lower_bound = 10
        n_value = 20
        ci_percent = 95

        with self.assertRaises(CIBoundInversionException):
            ci_to_sd(upper_bound, lower_bound, ci_percent, n_value)


class MultipointMeanSdTests(TestCase):
    """
    Test for verifying the behavior of the module for converting individual data points
    into a Mean / SD value
    """
    def test_two_round_data_points(self):
        """
        Given two round data points, verify that the conversion returns a correct mean
        sd value for those numbers.
        """
        values = [2, 3]
        expect_mean_result = 2.5
        expected_sd_result = .5
        result = multipoint_mean_sd(values)

        self.assertEqual(expect_mean_result, result['mean_result'])
        self.assertEqual(expected_sd_result, result['sd_result'])

    def test_many_round_data_points(self):
        """
        Given many round data points, verify that the conversion returns a correct mean
        sd value for those numbers.
        """
        values = [1, 1, 3, 5, 8, 3, 9, 2, 6, 2]
        expect_mean_result = 4
        expected_sd_result = 2.72029
        result = multipoint_mean_sd(values)

        self.assertEqual(expect_mean_result, result['mean_result'])
        self.assertAlmostEqual(expected_sd_result, result['sd_result'], 4)

    def test_many_decimal_data_points(self):
        """
        Given many decimal data points, verify that the conversion returns a correct mean
        sd value for those numbers.
        """
        values = [3.14, 42, 2.718281, 1.41421, 10]
        expect_mean_result = 11.854498
        expected_sd_result = 15.36621
        result = multipoint_mean_sd(values)

        self.assertAlmostEqual(expect_mean_result, result['mean_result'], 4)
        self.assertAlmostEqual(expected_sd_result, result['sd_result'], 4)

    def test_no_values(self):
        """
        Given an empty list / array is passed in, verify that the conversions handles this and
        returns an object with no values
        """
        values = []
        result = multipoint_mean_sd(values)

        self.assertEqual('', result['mean_result'])
        self.assertEqual('', result['sd_result'])


class NPrecentTests(TestCase):
    """
    Test for verifying the behavior of the module for converting "n of n" values
    to a percentage
    """
    def test_round_number_small(self):
        """
        Given round n values, verify the conversion returns the correct percantage values
        """
        given_n = 2
        total_n = 10
        expected_given_percent = 20
        expected_other_percent = 80
        result = n_percent(given_n, total_n)

        self.assertEqual(expected_given_percent, result['given_percent'])
        self.assertEqual(expected_other_percent, result['other_percent'])

    def test_round_number_larger(self):
        """
        Given larger round n values, verify the conversion returns the correct percantage values
        """
        given_n = 85
        total_n = 200
        expected_given_percent = 42.5
        expected_other_percent = 57.5
        result = n_percent(given_n, total_n)

        self.assertEqual(expected_given_percent, result['given_percent'])
        self.assertEqual(expected_other_percent, result['other_percent'])

    def test_decimal_number(self):
        """
        Given decimal n values, verify the conversion returns the correct percantage values
        """
        given_n = 2.5
        total_n = 10.5
        expected_given_percent = 23.80952
        expected_other_percent = 76.19047
        result = n_percent(given_n, total_n)

        self.assertAlmostEqual(expected_given_percent, result['given_percent'], 4)
        self.assertAlmostEqual(expected_other_percent, result['other_percent'], 4)

    def test_one_negative_number(self):
        """
        Given a negative number, verify that the conversion raises the relevant exception
        """
        given_n = -85
        total_n = 200

        with self.assertRaises(NegativeNumberExcpetion):
            n_percent(given_n, total_n)

    def test_two_negative_numbers(self):
        """
        Given two negatives number, verify that the conversion raises the relevant exception
        """
        given_n = -85
        total_n = -200

        with self.assertRaises(NegativeNumberExcpetion):
            n_percent(given_n, total_n)

    def test_given_n_larger_than_total(self):
        """
        Given two negatives number, verify that the conversion raises the relevant exception
        """
        given_n = 125
        total_n = 100

        with self.assertRaises(NToPercentValueInversionException):
            n_percent(given_n, total_n)
