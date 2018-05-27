from django.contrib.auth.models import User
from django.db import models
from simple_history.models import HistoricalRecords

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
    bookings_available = models.IntegerField('bookings available', blank=True, null=True, editable=False)
    bookings_made = models.IntegerField('bookings made', blank=True, null=True, default=0, editable=False)
    promotional_code = models.CharField('promotional code', max_length=30, blank=True, null=True)
    price = models.DecimalField('booking price', blank=True, null=True, max_digits=100, decimal_places=2)
    date_start = models.DateTimeField('event start date and time', auto_now=False, auto_now_add=False,
                                      null=False, blank=False)
    date_end = models.DateTimeField('event end date and time', auto_now=False, auto_now_add=False,
                                    null=False, blank=False)
    date_created = models.DateTimeField('date event created', auto_now=False, auto_now_add=True, editable=False)
    last_updated = models.DateTimeField('last updated date', auto_now=True, auto_now_add=False, editable=False)
    launch_date = models.DateTimeField('date event launched', blank=True, null=True, auto_now_add=False, auto_now=False)
    is_launched = models.BooleanField('event launched', default=False)
    # HistoricalRecords() from django-simple-history for the activity list
    history = HistoricalRecords()

    def __str__(self):
        return '{title} @ {venue} ({date})'.format(title=self.title,
                                                   venue=self.venue,
                                                   date=self.date_start)

    def save(self, *args, **kwargs):
        if not self.bookings_available:
            self.bookings_available = self.capacity_max
        super().save(*args, **kwargs)

    def create_bookings(self, quantity=0):
        # event = Event.objects.get(event_id=event_id)
        if self.capacity_max != self.bookings_made:
            self.bookings_made += quantity
            self.bookings_available -= quantity
            self.save()
        else:
            return False


# Bookings model
class Booking(models.Model):
    booking_id = models.BigAutoField(primary_key=True)
    event = models.ForeignKey(Event, related_name='event_bookings', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, related_name='user_bookings', on_delete=models.CASCADE, null=True, blank=False)
    quantity = models.IntegerField('number of guests', blank=False, null=False)
    payment = models.FloatField('payment', null=True, blank=True)
    promotional_code = models.CharField('promotional code', max_length=30, blank=True, null=True)
    date_created = models.DateTimeField('booking date', auto_now=False, auto_now_add=True)
    # HistoricalRecords() from django-simple-history for the activity list
    history = HistoricalRecords()

    def __str__(self):
        return '({booking_id}) {last_name}, {first_name} ({date}) '.format(booking_id=self.booking_id,
                                                                           first_name=self.user.first_name,
                                                                           last_name=self.user.last_name,
                                                                           date=self.date_created)

    def save(self, *args, **kwargs):
        if not self.payment and self.promotional_code != self.event.promotional_code:
            self.payment = self.event.price * self.quantity
        else:
            self.payment = 0

        # Check if bookings has exceeded the available bookings before saving booking
        if not self.event.create_bookings(self.quantity):
            super().save(*args, **kwargs)
