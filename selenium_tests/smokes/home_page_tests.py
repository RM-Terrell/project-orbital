import time
import unittest
import sys
import os

from selenium_tests.page_objects import base
from selenium_tests import BaseTest


class NavBarTests(BaseTest):
    """
    Tests that check the behavior of pages landed on from the nav bar.
    Smokey in nature. Best paired with scotch.
    """

    def test_home_page_load(self):
        """
        Given that a user navigates to the home url of the site, verify that the Home
        page loads with some content.
        """

if __name__ == '__main__':
    unittest.main()
