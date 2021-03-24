import unittest

from selenium_tests import BaseTest
from selenium_tests.page_objects.stats_page import StatsPage
from selenium_tests.page_objects.nav_bar import NavBar


class StatsPageTests(BaseTest):
    """
    Tests that check the behavior of the Stats conversion page. Tests in this class
    follow the paradigm of "Does it load all without error?" and do not investigate
    detailed functionality. Good for making sure all paged are at least functional
    after major work.
    """
    def setUp(self):
        super(StatsPageTests, self).setUp()
        self.stats_page = StatsPage(self.browser)
        self.nav_bar = NavBar(self.browser)
        self.nav_bar.navigate_to_stats_page()

    def test_stats_page_load(self):
        """
        Given that a user navigates to the Stats page, verify that it loads
        with some page content.
        """
        stats_page_content = self.stats_page.stats_page_content
        self.assertGreater(len(stats_page_content.text), 1)

    def test_stats_page_components_are_present(self):
        """
        Given that a user navigates to the Stats page, verify that the correct
        number of individual stats components are present. This will obviously break
        when adding or removing components purposefully and need to have its value updated,
        but will help catch regressions otherwise.
        """
        expected_stats_components = 4
        observed_stats_componenets = len(self.stats_page.stats_conversion_tools)
        self.assertEqual(expected_stats_components, observed_stats_componenets)


if __name__ == '__main__':
    unittest.main()
