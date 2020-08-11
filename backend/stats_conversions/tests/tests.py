from django.test import TestCase

from backend.stats_conversions.mathematics.conversions import sem_to_sd


class SemToSdTests(TestCase):
    """
    Tests for converting Standard Error of the Sample Mean to Standard Deviation
    """
    def test_single_digit_n_1(self):
        """
        Given a SEM of 2, and an N of 5,
        verify that the conversion to SD is 4.4721
        """
        print('sem test 1')
        expected_sd = 4.4721
        sem_value = 2
        n_value = 5
        result = sem_to_sd(sem_value, n_value)
        self.assertAlmostEqual(expected_sd, result, 4)

    def test_single_digit_n_2(self):
        """
        Given a SEM of 3, and an N of 20,
        verify that the conversion to SD is 13.4164
        """
        expected_sd = 13.4164
        sem_value = 3
        n_value = 20
        result = sem_to_sd(sem_value, n_value)
        self.assertAlmostEqual(expected_sd, result, 4)

    def test_single_digit_n_3(self):
        """
        Given a SEM of 2.5, and an N of 145,
        verify that the conversion to SD is 30
        """
        expected_sd = 30.1039
        sem_value = 2.5
        n_value = 145
        result = sem_to_sd(sem_value, n_value)
        self.assertAlmostEqual(expected_sd, result, 4)
