from .models import Beer, Brewer, Event

from rest_framework import serializers

class BrewerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brewer
        fields = ('id', 'name', 'founded', 'description', 'address', 'email', 'phone', 'website')

class BeerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Beer
        fields = ('id','name', 'style', 'description', 'ibu', 'abv', 'brewer_name')

    brewer_name = serializers.SerializerMethodField('get_brewers_name')

    def get_brewers_name(self, obj):
        return obj.brewer.name

class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('name', 'description', 'date', 'time', 'host')