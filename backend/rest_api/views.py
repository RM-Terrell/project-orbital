import json

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

        :param request request:
        :return Response:
        """
        data = {
            "description": "Convert Standard Error of the Mean, to Standard Deviation",
        }

        return Response(data=data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        """
        Perform the conversion

        :param request request:
        :return Response:
        """
        data = json.loads(request.body)
        sem = data.get('sem')
        n_value = data.get('n_value')
        result = sem_to_sd(float(sem), int(n_value))
        data = {
            "sd_result": result
        }

        return Response(data=data, status=status.HTTP_200_OK)


class CiToSd(APIView):
    """
    TODO
    """
    def get(self, request, format=None):
        """
        Gets descritpions / help information for the conversion

        :param request request:
        :return Response:
        """
        data = {
            "description": "Convert Confidence Interval, to Standard Deviation",
        }

        return Response(data=data, status=status.HTTP_200_OK)

    def put(self, request, format=None):
        """
        TODO
        """
        data = json.loads(request.body)


class MultipointMeanSD(APIView):
    """
    TODO
    """
    def get(self, request, format=None):
        """
        Gets descritpions / help information for the conversion

        :param request request:
        :return Response:
        """
        data = {
            "description": "Convert many individual data points, to Standard Deviation",
        }

        return Response(data=data, status=status.HTTP_200_OK)

    def put(self, request, format=None):
        """
        TODO
        """
        data = json.loads(request.body)


class NPercent(APIView):
    """
    TODO
    """
    def get(self, request, format=None):
        """
        Gets descritpions / help information for the conversion

        :param request request:
        :return Response:
        """
        data = {
            "description": "Convert n values to percentages",
        }

        return Response(data=data, status=status.HTTP_200_OK)

    def put(self, request, format=None):
        """
        TODO
        """
        data = json.loads(request.body)
