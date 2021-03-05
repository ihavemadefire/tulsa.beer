from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('home/', views.index, name='home'),
    path('index/', views.index, name='index'),
    path('beers/', views.beers, name='beers'),
    path('brewers/', views.brewers, name='brewers'),
    path('events/', views.events, name='events'),
    path('about/', views.about, name='about'),
    path('brewer/<int:id>/', views.brewer, name='brewer'),
    path('beer/<int:id>/', views.beer, name='beer'),
]