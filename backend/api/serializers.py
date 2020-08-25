from django.contrib.auth.models import User
from rest_framework import serializers, fields
from api.models import Position, Trade, Asset
from django.db import models
from django.utils import timezone


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "url",
            "username",
            "password",
            "first_name",
            "last_name",
            "email",
            "is_staff",
        ]


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = [
            "asset_id",
            "ticker",
            "num_of_shares",
            "asset_type",
            "price",
            "position_value",
            "date",
        ]


class PositionUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = [
            "asset_id",
            "ticker",
            "num_of_shares",
            "asset_type",
            "price",
            "position_value",
        ]


class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = [
            "trade_id",
            "asset_id",
            "trade_type",
            "num_of_shares",
            "price",
            "tot_price",
            "trade_status",
            "trade_time",
        ]


class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = [
            "asset_id",
            "ticker",
            "conid",
            "cusip",
            "valid_date",
            "industry_code",
            "country_code",
            "prim_exch",
            "currency",
            "flag",
        ]

