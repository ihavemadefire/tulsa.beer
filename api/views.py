from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BeerSerializer, BrewerSerializer, EventSerializer
from .models import Brewer, Beer, Event

# Create your views here.

class BeerViewSet(viewsets.ModelViewSet):
    queryset = Beer.objects.all().order_by('name')
    serializer_class = BeerSerializer

class BrewerViewSet(viewsets.ModelViewSet):
    queryset = Brewer.objects.all().order_by('name')
    serializer_class = BrewerSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('name')
    serializer_class = EventSerializer