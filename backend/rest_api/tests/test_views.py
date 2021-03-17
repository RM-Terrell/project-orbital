import json
from django.test import TestCase
from django.urls import reverse

from rest_framework.test import APIClient


from rest_api.views import (
    SemToSd,
    CiToSd,
    MultipointMeanSD,
    NPercent)


class SemToSdTests(TestCase):
    """
    Tests investigating the functionality of the SEM to SD endpoint
    """
    def setUp(self):
        super(SemToSdTests, self).setUp()
        self.client = APIClient()

    def test_sem_get(self):
        """
        Given a GET call to the url for SEM to SD conversions, verify that the expected help
        text is returned.
        """
        response = self.client.get(reverse('sem_to_sd'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['description'], 'Convert Standard Error of the Mean, to Standard Deviation')

    def test_sem_post(self):
        """
        Given a POST call to the url for SEM to SD conversions, verify that the endpoint returns
        an SD value
        """
        data = {'sem': 2, 'n_value': 10}
        response = self.client.post(reverse('sem_to_sd'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.data['sd_result'], 6.32455, 4)


class CiToSdTests(TestCase):
    """
    Tests investigating the functionality of the CI to SD endpoint
    """
    def setUp(self):
        super(CiToSdTests, self).setUp()
        self.client = APIClient()

    def test_ci_get(self):
        """
        Given a GET call to the url for CI to SD conversions, verify that the expected help
        text is returned.
        """
        response = self.client.get(reverse('ci_to_sd'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['description'], 'Convert Confidence Interval, to Standard Deviation')

    def test_ci_post(self):
        """
        Given a POST call to the url for CI to SD conversions, verify that the endpoint returns
        an SD value
        """
        data = {'lower_bound': 2, 'upper_bound': 5, 'n_value': 10, 'ci_percent': 95}
        response = self.client.post(reverse('ci_to_sd'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.data['sd_result'], 2.42011, 4)
        self.assertEqual(response.data['error_message'], '')

    def test_ci_bound_inversion(self):
        """
        Given a POST call to the url for CI to SD conversions, but with a lower bounder larger than the
        upper bound, verify that the endpoint returns an error message specific to that issue.
        """
        data = {'lower_bound': 10, 'upper_bound': 1, 'n_value': 10, 'ci_percent': 95}
        response = self.client.post(reverse('ci_to_sd'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['error_message'], 'Invalid bounds. Lower bound must be smaller than the upper bound.')
        self.assertEqual(response.data['sd_result'], '')

    def test_ci_invalid_percent(self):
        """
        Given a POST call to the url for CI to SD conversions, but with an invalid percentage, verify that
        the endpoint returns an error message specific to that issue.
        """
        bad_percent = 23
        data = {'lower_bound': 2, 'upper_bound': 5, 'n_value': 10, 'ci_percent': bad_percent}
        response = self.client.post(reverse('ci_to_sd'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['error_message'], 'Invalid confidence interval percentage.')
        self.assertEqual(response.data['sd_result'], '')


class MultipointTests(TestCase):
    """
    Tests investigating the functionality of the Multipoint data to Mean SD endpoint
    """
    def setUp(self):
        super(MultipointTests, self).setUp()
        self.client = APIClient()

    def test_multipoint_get(self):
        """
        Given a GET call to the url for Multipoint to Mean SD conversions, verify that the expected
        help text is returned.
        """
        response = self.client.get(reverse('multipoint'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['description'], 'Convert many individual data points, to Standard Deviation')

    def test_multipoint_post(self):
        """
        Given a POST call to the url for Multipoint to Mean SD conversions, verify that the endpoint returns
        a mean and an sd value
        """
        data = {'data_points': [1, 4, 6, 20, 1, 23, 7]}
        response = self.client.post(reverse('multipoint'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.data['mean_result'], 8.85714, 4)
        self.assertAlmostEqual(response.data['sd_result'], 8.30539, 4)

    def test_multipoint_post_empty(self):
        """
        Given a POST call to the url for Multipoint to Mean SD conversions with an empty list,
        verify that the endpoint returns a response
        """
        data = {'data_points': []}
        response = self.client.post(reverse('multipoint'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['mean_result'], '')
        self.assertAlmostEqual(response.data['sd_result'], '')


class NPercentTests(TestCase):
    """
    Tests investigating the functionality of the N to Percent endpoint
    """
    def setUp(self):
        super(NPercentTests, self).setUp()
        self.client = APIClient()

    def test_n_precent_get(self):
        """
        Given a GET call to the url for converting N to Percents, verify that the expected help
        text is returned.
        """
        response = self.client.get(reverse('n_percent'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['description'], 'Convert n values to percentages')

    def test_n_percent_post(self):
        """
        Given a POST call to the url for n-percent conversions, verify that the endpoint returns
        the two percent values.
        """
        data = {'given_n': 20, 'total_n': 50}
        response = self.client.post(reverse('n_percent'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['given_percent'], 40)
        self.assertEqual(response.data['other_percent'], 60)
        self.assertEqual(response.data['error_message'], '')

    def test_n_percent_one_negative(self):
        """
        Given a POST call to the url for n-percent conversions but with a negative number verify that the
        endpoint returns an error message.
        """
        data = {'given_n': -20, 'total_n': 50}
        response = self.client.post(reverse('n_percent'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['given_percent'], '')
        self.assertEqual(response.data['other_percent'], '')
        self.assertEqual(response.data['error_message'], 'Cannot convert negative numbers.')

    def test_n_percent_two_negatives(self):
        """
        Given a POST call to the url for n-percent conversions but with two negative numbers verify that the
        endpoint returns an error message.
        """
        data = {'given_n': -20, 'total_n': -50}
        response = self.client.post(reverse('n_percent'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['given_percent'], '')
        self.assertEqual(response.data['other_percent'], '')
        self.assertEqual(response.data['error_message'], 'Cannot convert negative numbers.')

    def test_n_percent_inversion(self):
        """
        Given a POSt call to the url for n-percent conversion but with a given_n larger than the total_n,
        verify that an error message is returned.
        """
        data = {'given_n': 100, 'total_n': 5}
        response = self.client.post(reverse('n_percent'), data=data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['given_percent'], '')
        self.assertEqual(response.data['other_percent'], '')
        self.assertEqual(response.data['error_message'], 'Given N value must smaller than the total N.')
