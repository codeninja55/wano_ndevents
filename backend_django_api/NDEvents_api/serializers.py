from django.contrib.auth.models import User
from django.contrib.auth.validators import UnicodeUsernameValidator
from rest_framework import serializers

from .models import Event, Booking

__author__ = 'codeninja55'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email')
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
    organisers_name = UserSerializer()
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
        fields = '__all__'
        read_only_fields = ('event_id',
                            'bookings_available',
                            'bookings_made',
                            'event_bookings',
                            'last_updated',
                            'date_created',
                            'self')

    def create(self, validated_data):
        organisers_name = validated_data.pop('organisers_name')
        username = organisers_name.pop('username')
        email = organisers_name.pop('email')
        organisers_name = User.objects.get_or_create(username=username, email=email)[0]
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
        instance.bookings_available = validated_data['capacity_max']
        instance.capacity_expected = validated_data['capacity_expected']
        instance.promotional_code = validated_data['promotional_code']
        instance.price = validated_data['price']
        instance.date_start = validated_data['date_start']
        instance.date_end = validated_data['date_end']
        instance.date_end = validated_data['date_end']
        instance.launch_date = validated_data['launch_date']
        instance.is_launched = validated_data['is_launched']
        instance.save()
        return instance
