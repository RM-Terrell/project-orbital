from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET'])
def test_get_call(request):
    print('running')
    return Response(data='test')
