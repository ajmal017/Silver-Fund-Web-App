import datetime
from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import *
from api.models import Position, Trade, Asset
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

from api.ibgateway_manager.services.positions_service import IBPositionsService
from api.ibgateway_manager.services.trades_service import IBTradesService
from api.ibgateway_manager.services.accounts_service import IBAccountsService


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


from rest_framework import status
from rest_framework import generics
from api.serializers import ChangePasswordSerializer


class ChangePasswordView(generics.UpdateAPIView):
    """
    An endpoint for changing password.
    """

    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response(
                    {"old_password": ["Wrong password."]},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                "status": "success",
                "code": status.HTTP_200_OK,
                "message": "Password updated successfully",
                "data": [],
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AllPositions(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Position.objects.order_by("-date", "ticker")
    serializer_class = PositionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class TradeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Trade.objects.order_by("-trade_time", "asset_id")
    serializer_class = TradeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AssetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Asset.objects.order_by("-valid_date", "ticker")  # TESTME
    serializer_class = AssetSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


@api_view(["GET"])
def filter_positions_by_date(request):
    start_date = request.query_params.get("start")
    end_date = request.query_params.get("end")
    pos = (
        Position.objects.filter(date__range=(start_date, end_date))
        .values()
        .order_by("-date", "ticker")
    )
    return Response(list(pos))


@api_view(["GET"])
def filter_trades_by_date(request):
    start_date = request.query_params.get("start")
    end_date = request.query_params.get("end")
    pos = (
        Trade.objects.filter(trade_time__range=(start_date, end_date))
        .values()
        .order_by("-trade_time", "asset_id")
    )
    return Response(list(pos))


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


@api_view(["POST"])
def update_positions(request):
    service = IBPositionsService("localhost")
    cur_positions = service.get_current()

    for pos in cur_positions:
        position = Position()
        serializer = PositionUpdateSerializer(position, data=pos)
        if serializer.is_valid():
            serializer.save()

    return Response(serializer.data)


@api_view(["POST"])
def update_trades(request):
    service = IBTradesService("localhost")
    cur_trades = service.get_current()

    for order in cur_trades:
        trade = Trade()
        print(order)
        serializer = TradeSerializer(trade, data=order)
        if serializer.is_valid():
            print("VALID")
            serializer.save()

    return Response(serializer.data)

