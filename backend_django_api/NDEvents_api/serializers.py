from django.contrib.auth.models import User
from django.contrib.auth.validators import UnicodeUsernameValidator
from rest_framework import serializers

from .models import Event, Booking

__author__ = 'codeninja55'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)
        extra_kwargs = {
            'username': {
                'validators': [UnicodeUsernameValidator()],
            }
        }


class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = (
            'booking_id',
            'event_id',
            'first_name',
            'last_name',
            'email',
            'quantity',
            'promotional_code',
            'date_created'
        )


class EventSerializer(serializers.ModelSerializer):
    # organisers_name = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    organisers_name = UserSerializer(read_only=True)
    event_bookings = BookingSerializer(many=True, read_only=True)
    date_start = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    date_end = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    date_created = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    last_updated = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    self = serializers.HyperlinkedIdentityField(read_only=True,
                                                view_name='ndevents:event',
                                                lookup_field='event_id')

    class Meta:
        model = Event
        fields = ('event_id', 'organisers_name', 'title',
                  'description', 'venue', 'capacity_max',
                  'capacity_expected', 'bookings_available', 'bookings_made',
                  'promotional_code', 'price', 'date_start',
                  'date_end', 'date_created', 'last_updated',
                  'launch_date', 'is_launched', 'self',
                  'event_bookings')


class EventCreateUpdateSerializer(serializers.ModelSerializer):
    organisers_name = UserSerializer()
    date_start = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    date_end = serializers.DateTimeField(format='%Y-%m-%d %H:%M')

    class Meta:
        model = Event
        fields = (
            'organisers_name', 'title', 'description',
            'venue', 'capacity_max', 'capacity_expected',
            'promotional_code', 'price', 'date_start',
            'date_end', 'launch_date', 'is_launched'
        )

    def create(self, validated_data):
        organisers_name = validated_data.pop('organisers_name')
        username = organisers_name.pop('username')
        organisers_name = User.objects.get_or_create(username=username)[0]
        event = Event.objects.create(organisers_name=organisers_name, **validated_data)
        return event

    def update(self, instance, validated_data):
        organisers_name = validated_data.pop('organisers_name')
        username = organisers_name.pop('username')
        organisers_name = User.objects.get_or_create(username=username)[0]
        instance.organisers_name = organisers_name
        instance.title = validated_data['title']
        instance.description = validated_data['description']
        instance.venue = validated_data['venue']
        instance.capacity_max = validated_data['capacity_max']
        instance.capacity_expected = validated_data['capacity_expected']
        instance.promotional_code = validated_data['promotional_code']
        instance.price = validated_data['price']
        instance.date_start = validated_data['date_start']
        instance.date_end = validated_data['date_end']
        instance.date_end = validated_data['date_end']
        instance.launch_date = validated_data['launch_date']
        instance.is_launched = validated_data['is_launched']
        return instance
