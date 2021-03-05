from django.shortcuts import render

# Create your views here.
from api.models import *

# Create your views here.

def beers(request):
    return render(request, 'web/beers.html')    

def brewers(request):
    return render(request, 'web/brewers.html')

def beer(request, id):
    beer = Beer.objects.get(id=id)
    return render(request, 'web/beer.html', {'beer': beer})

def brewer(request, id):
    brewer = Brewer.objects.get(id=id)
    beers = Beer.objects.filter(brewer = id)
    return render(request, 'web/brewer.html', {'brewer': brewer, 'beers': beers})

def events(request):
    return render(request, 'web/events.html')    

def about(request):
    return render(request, 'web/about.html')    

def index(request):
    return render(request, 'web/index.html')    