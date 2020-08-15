import json

from django.test import TestCase
from django.urls import reverse


class SemToSdTests(TestCase):
    """
    Unit tests around the endpoint for converting SEM to SD
    TODO mock out the math functions
    """
    def test_get_return_200(self):
        """
        Given that a GET call is made to the sem_to_sd endpoint, verify a 200 response is returned
        """
        response = self.client.get(reverse('sem_to_sd'))
        self.assertEqual(response.status_code, 200)

    def test_get_returns_description_text(self):
        """
        Given that a GET call is made to the sem_to_sd endpoint, verify that the description message is returned
        """
        response = self.client.get(reverse('sem_to_sd'))
        expected_descritpion = 'Convert Standard Error of the Mean, to Standard Deviation'
        self.assertEqual(response.data['description'], expected_descritpion)

    def test_post_return_200(self):
        """
        Given that a POST call is made to the sem_to_sd endpoint, verify a 200 response is returned with some data
        """
        post_params = json.dumps({
            "sem": "2",
            "n_value": "3",
        })
        response = self.client.post(reverse('sem_to_sd'), post_params, content_type="application/json")
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.data.get('sd_result'))
