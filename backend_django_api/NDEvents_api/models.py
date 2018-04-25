from django.contrib.auth.models import User
from django.db import models


__author__ = 'codeninja55'


# Events model
class Event(models.Model):
    event_id = models.BigAutoField(primary_key=True)
    organisers_name = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField('event title', max_length=30, blank=False, null=False)
    description = models.TextField('event description', blank=True)
    venue = models.TextField('event location', max_length=200, null=False, blank=False)
    capacity_max = models.IntegerField('max capacity', blank=True, null=False, default=0)
    capacity_expected = models.IntegerField('expected capacity', blank=True, null=False, default=0)
    bookings_available = models.IntegerField('bookings available', blank=True, null=True)
    bookings_made = models.IntegerField('bookings made', blank=True, null=True)
    promotional_code = models.CharField('promotional code', max_length=30, blank=True, null=True)
    price = models.DecimalField('booking price', blank=True, null=True, max_digits=100, decimal_places=2)
    date_start = models.DateTimeField('event start date and time', auto_now=False, auto_now_add=False)
    date_end = models.DateTimeField('event end date and time', auto_now=False, auto_now_add=False)
    date_created = models.DateTimeField('date event created', auto_now=False, auto_now_add=True)
    last_updated = models.DateTimeField('last updated date', auto_now=True, auto_now_add=False)
    launch_date = models.DateTimeField('date event launched', blank=True, null=True, auto_now_add=False, auto_now=False)
    is_launched = models.BooleanField('event launched', default=False)

    def __str__(self):
        return '{title} @ {venue} ({date})'.format(title=self.title,
                                                   venue=self.venue,
                                                   date=self.date_start)


# Need to update the tickets available as these are saved.
class Booking(models.Model):
    booking_id = models.BigAutoField(primary_key=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='event_booking', null=True, blank=True)
    first_name = models.CharField('first name', max_length=100, blank=False, null=False)
    last_name = models.CharField('last name', max_length=100, blank=False, null=False)
    email = models.EmailField('email', blank=False, null=False)
    quantity = models.IntegerField('number of guests', blank=False, null=False)
    promotional_code = models.CharField('promotional code', max_length=30, blank=True, null=True)
    date_created = models.DateTimeField('booking date', auto_now=False, auto_now_add=True)

    def __str__(self):
        return '({booking_id}) {first_name} {last_name} ({date}) '.format(booking_id=self.booking_id,
                                                                          first_name=self.first_name,
                                                                          last_name=self.last_name,
                                                                          date=self.date_created)
