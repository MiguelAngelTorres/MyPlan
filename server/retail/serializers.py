from rest_framework import serializers
from retail.models import Publics
from django.contrib.auth.models import User

class PublicsSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Publics
        fields = ('url', 'pk', 'owner', 'title', 'begin', 'end', 'description', 'photo', 'lat', 'lon', 'kind',)


class UserSerializer(serializers.HyperlinkedModelSerializer):
    publics = serializers.HyperlinkedRelatedField(many=True, view_name='snippet-detail', read_only=True)

    class Meta:
        model = User
        fields = ('url', 'pk', 'username', 'publics')
