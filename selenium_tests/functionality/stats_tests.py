import unittest

from selenium_tests import BaseTest
from selenium_tests.page_objects.stats_page import StatsPage
from selenium_tests.page_objects.nav_bar import NavBar


class StatsFunctionalityTests(BaseTest):
    """
    Tests checking end to end functionality of the stats page tools.
    """

    def setUp(self):
        super(StatsFunctionalityTests, self).setUp()
        self.stats_page = StatsPage(self.browser)
        self.nav_bar = NavBar(self.browser)
        self.nav_bar.navigate_to_stats_page()

    def test_ci_to_sd_output_result(self):
        """
        Given a user enters valid data into the CI to SD tool, verify a number is output
        and that the number is the correct value.
        """
        result = self.stats_page.convert_ci_to_sd(3, 2, 10, 90)
        try:
            sd_result = float(result)
            expected_sd_result = 0.9611786201119694
            self.assertIsInstance(sd_result, float)
            self.assertEqual(expected_sd_result, sd_result)
        except ValueError as e:
            self.fail(e)

    def test_sem_to_sd_output_result(self):
        """
        Given a user enters valid data into the SEM to SD tool, verify a number is output
        and that the number is the correct value.
        """
        result = self.stats_page.convert_sem_to_sd(5, 20)
        try:
            sd_result = float(result)
            expected_sd_result = 22.360679774997898
            self.assertIsInstance(sd_result, float)
            self.assertEqual(expected_sd_result, sd_result)
        except ValueError as e:
            self.fail(e)

    def test_n_to_perc_output_result(self):
        """
        Given a user enters valid data into the n to percent tool, verify a number is output
        and that the number is the correct value.
        """
        result = self.stats_page.convert_n_to_percent(37, 154)
        try:
            perc_result = float(result['given_n_as_percent'])
            remainder_perc_result = float(result['remainder_percent'])
            expected_given_perc_result = 24.025974025974026
            expected_remainder_perc_result = 75.97402597402598
            self.assertIsInstance(perc_result, float)
            self.assertIsInstance(remainder_perc_result, float)
            self.assertEqual(expected_given_perc_result, perc_result)
            self.assertEqual(expected_remainder_perc_result, remainder_perc_result)
        except ValueError as e:
            self.fail(e)

    def test_multipoint_to_sd_output_result(self):
        """
        Given a user enters valid data into the Multipoint Mean SD tool, verify a number is output
        for mean and sd, and that the numbers are the correct value.
        """
        result = self.stats_page.convert_multipoint_to_sd()
        try:
            # TODO
        except ValueError as e:
            self.fail(e)

if __name__ == '__main__':
    unittest.main()
