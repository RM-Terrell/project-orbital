from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from stats_conversions.mathematics.conversions import sem_to_sd


class SemToSd(APIView):
    """
    Endpoint for Standard Error to Standard Deviation REST API calls
    """
    def get(self, request, format=None):
        """
        Gets descritpions / help information for the conversion
        """
        data = {
            "description": "Convert Standard Error of the Mean, to Standard deviation",
        }

        return Response(data=data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        """
        Perform the conversion
        """
        sem = request.POST.get('sem')
        n_value = request.POST.get('n_value')
        result = sem_to_sd(int(sem), int(n_value))
        data = {
            "sd_result": result
        }

        return Response(data=data, status=status.HTTP_200_OK)
