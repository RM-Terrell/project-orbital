import json

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from stats_conversions.mathematics.conversions import (
    sem_to_sd,
    ci_to_sd,
    multipoint_mean_sd,
    n_percent,
)
from stats_conversions.mathematics.exceptions import (
    NegativeNumberException,
    InvalidCIPercentageException,
    CIBoundInversionException,
    NToPercentValueInversionException,
)


class SemToSd(APIView):
    """
    Endpoint for Standard Error to Standard Deviation REST API calls
    """
    def get(self, request, format=None):
        """
        Gets descriptions / help information for the conversion

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
        request = json.loads(request.body)
        sem = request.get('sem')
        n_value = request.get('n_value')

        result = sem_to_sd(float(sem), int(n_value))
        data = {
            "sd_result": result
        }

        return Response(data=data, status=status.HTTP_200_OK)


class CiToSd(APIView):
    """
    Endpoint for Confidence Interval to Standard Deviation REST API calls
    """
    def get(self, request, format=None):
        """
        Gets descriptions / help information for the conversion

        :param request request:
        :return Response:
        """
        data = {
            "description": "Convert Confidence Interval, to Standard Deviation",
        }

        return Response(data=data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        """
        Perform conversion from CI to SD

        :param request request:
        :return Response:
        """
        request = json.loads(request.body)
        upper_bound = request.get('upper_bound')
        lower_bound = request.get('lower_bound')
        n_value = request.get('n_value')
        ci_percent = request.get('ci_percent')
        error_message = ''
        result = ''

        try:
            result = ci_to_sd(float(upper_bound), float(lower_bound), int(ci_percent), int(n_value))
        except CIBoundInversionException:
            error_message = 'Invalid bounds. Lower bound must be smaller than the upper bound.'
        except InvalidCIPercentageException:
            error_message = 'Invalid confidence interval percentage.'
        data = {
            "sd_result": result,
            'error_message': error_message,
        }

        return Response(data=data, status=status.HTTP_200_OK)


class MultipointMeanSD(APIView):
    """
    Endpoint for converting multiple data points to Standard Deviation REST API calls
    """
    def get(self, request, format=None):
        """
        Gets descriptions / help information for the conversion

        :param request request:
        :return Response:
        """
        data = {
            "description": "Convert many individual data points, to Standard Deviation",
        }

        return Response(data=data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        """
        Perform the conversion of many data points into a mean / sd value
        """
        request = json.loads(request.body)
        values = request.get('data_points')

        result = multipoint_mean_sd(values)

        data = {
            'mean_result': result['mean_result'],
            'sd_result': result['sd_result'],
        }

        return Response(data=data, status=status.HTTP_200_OK)


class NPercent(APIView):
    """
    Endpoint for converting n values to percentage REST API calls
    """
    def get(self, request, format=None):
        """
        Gets descriptions / help information for the conversion

        :param request request:
        :return Response:
        """
        data = {
            "description": "Convert n values to percentages",
        }

        return Response(data=data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        """
        Perform the conversion of two n values into percents
        """
        request = json.loads(request.body)
        given_n = request.get('given_n')
        total_n = request.get('total_n')
        error_message = ''
        given_percent = ''
        other_percent = ''

        try:
            result = n_percent(given_n, total_n)
            given_percent = result['given_percent']
            other_percent = result['other_percent']
        except NegativeNumberException:
            error_message = 'Cannot convert negative numbers.'
        except NToPercentValueInversionException:
            error_message = 'Given N value must smaller than the total N.'
        data = {
            'given_percent': given_percent,
            'other_percent': other_percent,
            'error_message': error_message,
        }

        return Response(data=data, status=status.HTTP_200_OK)
