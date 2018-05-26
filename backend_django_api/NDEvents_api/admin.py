from django.contrib import admin
from simple_history.admin import SimpleHistoryAdmin
from .models import Event, Booking

# Register your models here.

admin.site.register(Event, SimpleHistoryAdmin)
admin.site.register(Booking, SimpleHistoryAdmin)
