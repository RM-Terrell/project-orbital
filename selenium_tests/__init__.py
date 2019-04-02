import abc
import unittest

from selenium_tests.drivers import firefox_browser

TIMEOUT = 10
SERVER_URL = 'http://127.0.0.1:8000/'


class BaseTest(unittest.TestCase):
    """
    Abstract base class that all Selenium tests inherit from.
    """
    __metaclass__ = abc.ABCMeta

    @classmethod
    @abc.abstractmethod
    def setUpClass(cls):
        super(BaseTest, cls).setUpClass()
        cls.browser = firefox_browser()
        cls.browser.implicitly_wait(TIMEOUT)
        cls.server_url = SERVER_URL

    @classmethod
    @abc.abstractmethod
    def tearDownClass(cls):
        cls.browser.quit()
        super(BaseTest, cls).tearDownClass()

    def setUp(self):
        # Tests navigate to home url before tests to clear any stray modals
        self.browser.get(self.server_url)
