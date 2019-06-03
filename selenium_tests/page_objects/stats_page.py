from selenium_tests.page_objects.base import Base


class StatsPage(Base):
    """
    Functions and locators for use on the stats page.
    """
    _home_page_wrapper_selector = 'div#stats-page-container'
    _stats_tools_container_selector = 'div#stats-tools-container'
    _stats_tools_components_selector = 'div.stats-component-container'
    _ci_to_sd_tool_componenet_selector = 'div#ci-to-sd-container'

    @property
    def stats_page_content(self):
        """
        Returns the stats page object

        :return WebElement:
        """
        return self.browser.find_element_by_css_selector(self._home_page_wrapper_selector)

    @property
    def stats_tools_container(self):
        """
        Returns the section of the webpage containing the stats tools

        :return WebElement:
        """
        return self.stats_page_content.find_element_by_css_selector(self._stats_tools_container_selector)

    @property
    def stats_conversion_tools(self):
        """
        Returns all the stats conversion tools

        :return [WebElement]:
        """
        return self.stats_tools_container.find_elements_by_css_selector(self._stats_tools_components_selector)

    @property
    def ci_to_sd_stats_tool(self):
        """
        Returns the web element of the tool for converting confidence intervals to standard deviation

        :return WebElement:
        """
        return self.stats_tools_container.find_element_by_css_selector(self._ci_to_sd_tool_componenet_selector)
