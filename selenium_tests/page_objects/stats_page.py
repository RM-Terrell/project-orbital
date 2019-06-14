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
    _ci_to_sd_tool_selector = 'div#ci-to-sd-container'
    _ci_sd_upper_input_selector = 'input#upper-bound-input'
    _ci_sd_lower_input_selector = 'input#lower-bound-input'
    _ci_sd_n_input_selector = 'input#n-value-ci-input'
    _ci_sd_ci_dropdown_selector = 'select#ci-percent-input'
    _ci_sd_sd_output_selector = 'output#sd-ci-output'
    _submit_button_selector = 'button[type="submit"]'
    _sem_to_sd_tool_selector = 'div#sem-to-sd-container'
    _sem_sd_n_value_input_selector = 'input#n-value-sem-input'
    _sem_sd_sem_value_input_selector = 'input#sem-value-input'
    _sem_sd_sd_result_output_selector = 'output#sem-sd-output'
    _n_to_perc_tool_selector = 'div#n-to-percent-container'
    _n_perc_given_n_input_selector = 'input#given-n-value'
    _n_perc_total_n_input_selector = 'input#total-n-value'
    _n_perc_given_perc_output_selector = 'output#result-given-perc-value'
    _n_perc_other_perc_output_selector = 'output#result-other-perc-value'

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
        return self.stats_tools_container.find_element_by_css_selector(self._ci_to_sd_tool_selector)

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
    def ci_sd_n_input(self):
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
        return self.ci_to_sd_stats_tool.find_element_by_css_selector(self._submit_button_selector)

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
        TODO is this actually returning an int or a float? Docstring
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
        self.ci_sd_n_input.send_keys(n)
        self.select_ci_sd_percent_value(percent)
        self.ci_sd_button.click()

        return self.ci_sd_sd_output.get_attribute('value')

    @property
    def sem_sd_conversion_tool(self):
        """
        Returns the web element containing the tool for converting SEM to SD.

        :return WebElement:
        """
        return self.stats_tools_container.find_element_by_css_selector(self._sem_to_sd_tool_selector)

    @property
    def sem_sd_n_input(self):
        """
        Returns the input field for the n value of the SEM to SD tool.

        :return WebElement:
        """
        return self.sem_sd_conversion_tool.find_element_by_css_selector(self._sem_sd_n_value_input_selector)

    @property
    def sem_sd_sem_input(self):
        """
        Returns the input field for the SEM value of the SEM to SD tool.

        :return WebElement:
        """
        return self.sem_sd_conversion_tool.find_element_by_css_selector(self._sem_sd_sem_value_input_selector)

    @property
    def sem_sd_sd_result(self):
        """
        Returns the output field for the SD value of the SEM to SD tool.

        :return WebElement:
        """
        return self.sem_sd_conversion_tool.find_element_by_css_selector(self._sem_sd_sd_result_output_selector)

    @property
    def sem_sd_calculate_button(self):
        """
        Returns the button to calculate values for the SEM to SD tool.

        :return WebElement:
        """
        return self.sem_sd_conversion_tool.find_element_by_css_selector(self._submit_button_selector)

    def convert_sem_to_sd(self, sem, n):
        """
        Method to fully encapsulate converting a SEM and N value to SD.

        :param int sem:
        :param int n:
        :return int standard_deviation:
        """
        self.sem_sd_sem_input.send_keys(sem)
        self.sem_sd_n_input.send_keys(n)
        self.sem_sd_calculate_button.click()

        return self.sem_sd_sd_result.get_attribute('value')

    @property
    def n_to_perc_tool(self):
        """

        :return WebElement:
        """
        return self.stats_tools_container.find_element_by_css_selector(self._n_to_perc_tool_selector)

    @property
    def n_perc_given_n(self):
        """
        Returns the input for given N value for the N to Percent tool

        :return WebElement:
        """
        return self.n_to_perc_tool.find_element_by_css_selector(self._n_perc_given_n_input_selector)

    @property
    def n_perc_total_n(self):
        """
        Returns the input for the total N value for the N to Percent tool

        :return WebElement:
        """
        return self.n_to_perc_tool.find_element_by_css_selector(self._n_perc_total_n_input_selector)

    @property
    def n_perc_given_perc(self):
        """
        Returns the output for the given N percent for the N to Percent tool

        :return WebElement:
        """
        return self.n_to_perc_tool.find_element_by_css_selector(self._n_perc_given_perc_output_selector)

    @property
    def n_perc_remainder_perc(self):
        """
        Returns the out for the other percent for the N to Percent tool

        :return WebElement:
        """
        return self.n_to_perc_tool.find_element_by_css_selector(self._n_perc_other_perc_output_selector)

    @property
    def n_perc_calculate_button(self):
        """
        Returns the calculate button for the N to Percent tool

        :return WebElement:
        """
        return self.n_to_perc_tool.find_element_by_css_selector(self._submit_button_selector)

    def convert_n_to_percent(self, given_n, total_n):
        """
        Method to fully encapsulate converting and N value and Total N to percents using
        the N to Percent tool.

        :param int given_n:
        :param int total_n:
        :return dict: dictionary containing the given N as a percent, and the remainder percent
        """
        self.n_perc_given_n.send_keys(given_n)
        self.n_perc_total_n.send_keys(total_n)
        self.n_perc_calculate_button.click()
        given_n_as_perc = self.n_perc_given_perc.get_attribute('value')
        remainder_perc = self.n_perc_remainder_perc.get_attribute('value')

        return {'given_n_as_percent': given_n_as_perc,
                'remainder_percent': remainder_perc}
