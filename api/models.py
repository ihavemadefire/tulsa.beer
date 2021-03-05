from django.db import models

# Create your models here.
class Brewer(models.Model):
    name = models.CharField(max_length=200, null=True)
    founded = models.IntegerField(null=True)
    description = models.TextField(null=True)
    address = models.CharField(max_length=200, null=True)
    email = models.EmailField(max_length=254, null=True)
    phone = models.CharField(max_length=20, null=True)
    website = models.URLField(max_length=200, null=True)
    def __str__(self):
        return self.name

class Beer(models.Model):
    name = models.CharField(max_length=200, null=True)
    style = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    ibu = models.IntegerField(null=True)
    abv = models.FloatField(null=True)
    brewer = models.ForeignKey(Brewer, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True)
    date = models.DateTimeField(null=True)
    time = models.TimeField(null=True)
    host = models.ForeignKey(Brewer, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
