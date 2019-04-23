import time
import unittest
import sys
import os

from selenium_tests import BaseTest
from selenium_tests.page_objects.stats_page import StatsPage
from selenium_tests.page_objects.nav_bar import NavBar


class StatsPageTests(BaseTest):
    """
    Tests that check the behavior of pages landed on from the nav bar.
    Smokey in nature. Best paired with scotch.
    """

    def setUp(self):
        super(StatsPageTests, self).setUp()
        self.stats_page = StatsPage(self.browser)
        self.nav_bar = NavBar(self.browser)

    def test_stats_page_load(self):
        """
        Given that a user navigates to the Stats page, verify that it loads
        with some page content.
        """
        self.nav_bar.navigate_to_stats_page()
        stats_page_content = self.stats_page.stats_page_content
        self.assertGreater(len(stats_page_content.text), 1)

if __name__ == '__main__':
    unittest.main()
