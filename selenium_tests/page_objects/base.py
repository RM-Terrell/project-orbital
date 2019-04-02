import time

from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait as wait
from selenium.webdriver.common.by import By
from selenium.common.exceptions import StaleElementReferenceException


class Base(object):
    """
    Base class that all page object models inherit from.
    """

    def __init__(self, browser):
        self.browser = browser
