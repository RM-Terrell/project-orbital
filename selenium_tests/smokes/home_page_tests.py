import unittest

from selenium_tests import BaseTest
from selenium_tests.page_objects.home_page import HomePage


class NavBarTests(BaseTest):
    """
    Tests that check the behavior of the home page. Tests in this class
    follow the paradigm of "Does it load all without error?" and do not investigate
    detailed functionality. Good for making sure all paged are at least functional
    after major work. Run before functionality tests for efficient testing.
    """

    def setUp(self):
        super(NavBarTests, self).setUp()
        self.home_page = HomePage(self.browser)

    def test_home_page_load(self):
        """
        Given that a user navigates to the home url of the site, verify that the Home
        page loads with some content.
        """
        home_page_content = self.home_page.home_page_content

        # Check that the page content renders at all, and with some text
        self.assertIsNotNone(home_page_content)
        self.assertGreater(len(home_page_content.text), 1)

if __name__ == '__main__':
    unittest.main()
