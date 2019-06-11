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

    # Todo SEM test

    # TODO Percent to Percent test

    # TODO Multipoint test

if __name__ == '__main__':
    unittest.main()
