from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import UserSerializer, GroupSerializer, PositionsSerializer
from api.models import Positions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from sfserver.calls.sf_calls import SFCalls
import json

# from snippets.models import Snippet
# from snippets.serializers import SnippetSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]



class PositionsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Positions.objects.all()
    serializer_class = PositionsSerializer
    permission_classes = [permissions.IsAuthenticated]


@api_view(["GET"])
def get_cur_positions(request):

    caller = SFCalls("sam", "earnest", "44.228.77.60")
    resp = caller.get_positions_current

    serializer = PositionsSerializer(resp[0])

    #snippets = Snippet.objects.all()
    #serializer = SnippetSerializer(snippets, resp.data)
    #print(json.dumps(resp, indent=4))
   
    return Response(serializer.data)
