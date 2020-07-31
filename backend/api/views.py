from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import UserSerializer, GroupSerializer, PositionsSerializer
#from api.models import Positions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.ibgateway_manager.services.positions_service import IBPositionsService
from api.ibgateway_manager.services.trades_service import IBTradesService
from api.ibgateway_manager.services.accounts_service import IBAccountsService

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



# class PositionsViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Positions.objects.all()
#     serializer_class = PositionsSerializer
#     permission_classes = [permissions.IsAuthenticated]


@api_view(["GET"])
def get_cur_positions(request):

    service = IBPositionsService("localhost")
    cur_positions = service.get_current()
    return Response(cur_positions)


@api_view(["GET"])
def get_cur_trades(request):

    service = IBTradesService("localhost")
    cur_trades = service.get_current()
    return Response(cur_trades)


@api_view(["GET"])
def get_unsettled_trades(request):

    service = IBTradesService("localhost")
    un_trades = service.get_unsettled()
    return Response(un_trades)

@api_view(["GET"])
def get_cashbalance(request):

    service = IBAccountsService("localhost")
    cashbalance = service.get_cash_balance()
    return Response(cashbalance)








