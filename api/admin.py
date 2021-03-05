from django.contrib import admin

# Register your models here.

from .models import Beer, Brewer, Event

admin.site.register(Beer)
admin.site.register(Brewer)
admin.site.register(Event)