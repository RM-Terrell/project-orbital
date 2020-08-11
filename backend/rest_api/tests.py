from django.test import TestCase
from django.urls import reverse


class SemToSdTests(TestCase):
    """
    Unit tests around the endpoint for converting SEM to SD
    TODO mock out the actual math function once they are integrated into the REST API view
    """
    def test_get_return_200(self):
        """
        Given that a GET call is made to the sem_to_sd endpoint, verify a 200 response is returned
        """
        response = self.client.get(reverse('sem_to_sd'))
        self.assertEqual(response.status_code, 200)

    def test_get_returns_text(self):
        """
        Given that a GET call is made to the sem_to_sd endpoint, verify a 200 response is returned
        """
        response = self.client.get(reverse('sem_to_sd'))
        print(response)

    def test_post_return_200(self):
        """
        Given that a POST call is made to the sem_to_sd endpoint, verify a 200 response is returned
        """
        # TODO FINISH
        # response = self.client.post(reverse('sem_to_sd'))
        # self.assertEqual(response.status_code, 200)
