from django.contrib.auth.models import User, Group
from rest_framework import serializers, fields
from api.models import Position, Trade
from django.db import models 
from django.utils import timezone

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
        
        
class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        # date = models.DateField(default=timezone.now)
        model = Position
        fields = ['asset_id', 'ticker', 'num_of_shares', 'pos_type', 'price', 'position_value']

class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = ['trade_id', 'asset_id', 'trade_type', 'num_of_shares', 'price', 'tot_price', 'trade_time']