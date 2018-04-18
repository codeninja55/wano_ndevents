from datetime import datetime, timedelta

from django.conf import settings
from django.db import models

__author__ = 'codeninja55'


def default_time_end():
    return datetime.now() + timedelta(hours=1)


def date_now():
    return datetime.now()


# Events model
class Event(models.Model):
    event_id = models.AutoField(primary_key=True)
    organisers_name = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField('event title', max_length=30, blank=False, null=False)
    description = models.TextField('event description', max_length=200, blank=True)
    venue = models.TextField('event location', max_length=200, null=False, blank=False)
    capacity_max = models.IntegerField('max capacity', blank=True, null=False, default=0)
    capacity_expected = models.IntegerField('expected capacity', blank=True, null=False, default=0)
    date_start = models.DateField('event start date', auto_now=False, auto_now_add=False, default=date_now)
    date_end = models.DateField('event end date', auto_now=False, auto_now_add=False)
    time_start = models.TimeField('event start time', auto_now=False, auto_now_add=False, default=date_now)
    time_end = models.TimeField('event end time', auto_now=False, default=default_time_end)
    date_created = models.DateTimeField('date event created', auto_now=False, auto_now_add=True)
    last_updated = models.DateTimeField('last updated date', auto_now=True, auto_now_add=False)
    launch_date = models.DateTimeField('date event launched', blank=True, null=True, auto_now_add=False, auto_now=False)
    is_launched = models.BooleanField('event launched', default=False)

    def __str__(self):
        return '{title} {at} {venue} ({date})'.format(title=self.title,
                                                      at="@",
                                                      venue=self.venue,
                                                      date=self.date_start)


class Ticket(models.Model):
    pass


# Need to update the tickets available as these are saved.
class Booking(models.Model):
    pass
