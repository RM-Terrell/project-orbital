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

    def test_ci_to_sd_outputs_a_result(self):
        """
        Given a user enters valid data into the CI to SD tool, verify that some number
        is returned in the output field.
        """
        result = self.stats_page.convert_ci_to_sd(3, 2, 10, 90)
        try:
            sd_result = float(result)
            self.assertIsInstance(sd_result, float)
        except ValueError as e:
            self.fail(e)

if __name__ == '__main__':
    unittest.main()
