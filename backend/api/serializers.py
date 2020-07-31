from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import Position

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
        model = Position
        fields = ['asset_id', 'ticker', 'num_of_shares', 'pos_type', 'price', 'position_value']