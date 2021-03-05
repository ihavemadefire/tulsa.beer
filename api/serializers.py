from .models import Beer, Brewer, Event

from rest_framework import serializers

class BrewerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brewer
        fields = ('name', 'founded', 'description', 'address', 'email', 'phone', 'website')

class BeerSerializer(serializers.ModelSerializer):
    brewer = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = Beer
        fields = ('name', 'style', 'description', 'ibu', 'abv', 'brewer')
        
class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('name', 'description', 'date', 'time', 'host')