from django.test import TestCase

from backend.stats_conversions.mathematics.conversions import sem_to_sd

# Create your tests here.


class SemToSdTests(TestCase):
    """
    Tests for converting Standard Error of the Sample Mean to Standard Deviation
    """
    def test_single_digit_n_1(self):
        """
        Given a SEM of 2, and an N of 5,
        verify that the conversion to SD is 4.4721
        """
        expected_sd = 4.4721
        result = sem_to_sd(2, 5)
        self.assertAlmostEqual(expected_sd, result, 4)
