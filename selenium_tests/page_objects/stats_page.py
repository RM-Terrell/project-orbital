from selenium_tests.page_objects.base import Base


class StatsPage(Base):
    """
    Functions and locators for use on the stats page.
    """
    _home_page_wrapper_selector = 'div#stats-page-wrapper'

    @property
    def stats_page_content(self):
        """
        Returns the stats page object

        :return WebElement:
        """
        return self.browser.find_element_by_css_selector(self._home_page_wrapper_selector)
