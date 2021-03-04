from selenium_tests.page_objects.base import Base


class NavBar(Base):
    """
    Methods and locators for use with the navigation bar.
    """
    _navbar_selector = 'nav.navbar'
    _stats_link_text = 'Stats'

    @property
    def nav_bar(self):
        """
        Method to return the navbar element.

        :return WebElement:
        """
        return self.browser.find_element_by_css_selector(self._navbar_selector)

    def navigate_to_stats_page(self):
        """
        Method to full contain navigating to the stats page as long as the nav bar is visible.
        """
        navbar = self.nav_bar
        navbar.find_element_by_link_text(self._stats_link_text).click()        
