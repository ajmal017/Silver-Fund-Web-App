from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import Positions

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
        

# class PositionsSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Positions
#         fields = ['ticker', 'value']

class PositionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Positions
        fields = ['asset_id', 'ticker', 'num_of_shares', 'pos_type', 'price', 'position_value']