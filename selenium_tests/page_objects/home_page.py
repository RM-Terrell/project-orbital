from selenium_tests.page_objects.base import Base


class HomePage(Base):
    """
    Functions and locators for use on the home page.
    """
    _home_page_wrapper_selector = 'div#home-page-wrapper'

    @property
    def home_page_content(self):
        """
        Returns the home page object

        :return WebElement:
        """
        return self.browser.find_element_by_css_selector(self._home_page_wrapper_selector)
