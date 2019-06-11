import time

from selenium.webdriver.support.ui import Select

from selenium_tests.page_objects.base import Base


class StatsPage(Base):
    """
    Functions and locators for use on the stats page.
    """
    _home_page_wrapper_selector = 'div#stats-page-container'
    _stats_tools_container_selector = 'div#stats-tools-container'
    _stats_tools_components_selector = 'div.stats-component-container'
    _ci_to_sd_tool_componenet_selector = 'div#ci-to-sd-container'
    _ci_sd_upper_input_selector = 'input#upper-bound-input'
    _ci_sd_lower_input_selector = 'input#lower-bound-input'
    _ci_sd_n_input_selector = 'input#n-value-ci-input'
    _ci_sd_ci_dropdown_selector = 'select#ci-percent-input'
    _ci_sd_sd_output_selector = 'output#sd-ci-output'
    _ci_sd_calculate_button_selector = 'button[type="submit"]'

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

    @property
    def ci_sd_upper_bound(self):
        """
        Returns input field for CI to SD upper bound

        :return WebElement:
        """
        return self.ci_to_sd_stats_tool.find_element_by_css_selector(self._ci_sd_upper_input_selector)

    @property
    def ci_sd_lower_bound(self):
        """
        Returns input field for CI to SD lower bound

        :return WebElement:
        """
        return self.ci_to_sd_stats_tool.find_element_by_css_selector(self._ci_sd_lower_input_selector)

    @property
    def ci_sd_n_value(self):
        """
        Returns input field for N value

        :return WebElement:
        """
        return self.ci_to_sd_stats_tool.find_element_by_css_selector(self._ci_sd_n_input_selector)

    @property
    def ci_sd_percent_select(self):
        """
        Returns the selector HTML element for CI percent as a Selenium Select

        :return Select:
        """
        return Select(self.ci_to_sd_stats_tool.find_element_by_css_selector(self._ci_sd_ci_dropdown_selector))

    @property
    def ci_sd_sd_output(self):
        """
        Returns the output element for the SD result

        :return WebElement:
        """
        return self.ci_to_sd_stats_tool.find_element_by_css_selector(self._ci_sd_sd_output_selector)

    @property
    def ci_sd_button(self):
        """
        Returns the button for CI to SD conversions

        :return WebElement:
        """
        return self.ci_to_sd_stats_tool.find_element_by_css_selector(self._ci_sd_calculate_button_selector)

    def select_ci_sd_percent_value(self, percent):
        """
        Method to fully encapsulate selecting a percent value from the percent drop down
        in the tool for converting Confidence Intervals to Standard Deviation.

        :param int percent:
        """
        select = self.ci_sd_percent_select
        # must be a string for seleniums select_by_value() method
        percent = str(percent)
        select.select_by_value(percent)

    def convert_ci_to_sd(self, upper_bound, lower_bound, n, percent):
        """
        Method to fully encapsulate entering values, and returning results in the tool for
        converting Confidence Intervals to Standard Deviation.

        :param int upper_bound:
        :param int lower_bound:
        :param int n value:
        :param int percent:

        :return int standard_deviation:
        """
        self.ci_sd_upper_bound.send_keys(upper_bound)
        self.ci_sd_lower_bound.send_keys(lower_bound)
        self.ci_sd_n_value.send_keys(n)
        self.select_ci_sd_percent_value(percent)
        self.ci_sd_button.click()

        return self.ci_sd_sd_output.get_attribute("value")
