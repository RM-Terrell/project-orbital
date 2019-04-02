from selenium import webdriver

from selenium.webdriver.firefox.options import Options as FirefoxOptions


def firefox_browser():
    """
    Function defining the Firefox browser for Selenium testing
    """
    options = FirefoxOptions()
    browser = webdriver.Firefox(firefox_options=options)
    browser.maximize_window()

    return browser
