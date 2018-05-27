from django.contrib.auth.models import User
from django.contrib.auth.validators import UnicodeUsernameValidator
from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from .models import Event, Booking

__author__ = 'codeninja55'


class ExistingUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name')
        read_only_fields = ('first_name', 'last_name',)
        extra_kwargs = {
            'username': {
                'validators': [UnicodeUsernameValidator()],
            }
        }


class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = (
            'pk',
            'username',
            'email',
            'first_name',
            'last_name',
            'is_staff',
            'password',
            'password2',
        )
        read_only_fields = ('pk', )
        write_only_fields = ('password', 'password2')
        extra_kwargs = {
            'username': {
                'validators': [UnicodeUsernameValidator()],
            },
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        password2 = validated_data.pop('password2', None)
        # self.Meta.model, so if the model is changed on the serializer, it still works.
        # instance = self.Meta.model(**validated_data)
        if password is not None and password == password2:
            user = User.objects.create_user(username=validated_data.pop('username'),
                                            email=validated_data.pop('email'),
                                            password=password,
                                            **validated_data)
            return user

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance


class BookingSerializer(serializers.ModelSerializer):
    user = ExistingUserSerializer()

    class Meta:
        model = Booking
        read_only_fields = ('booking_id', 'payment', 'date_created')
        fields = (
            'booking_id',
            'event',
            'user',
            'quantity',
            'payment',
            'promotional_code',
            'date_created'
        )

    def create(self, validated_data):
        user = validated_data.pop('user')
        username = user.pop('username')
        email = user.pop('email')
        user = User.objects.get_or_create(username=username, email=email)[0]
        event = validated_data.pop('event')
        event_id = event.event_id
        event = Event.objects.get_or_create(event_id=event_id)[0]
        return Booking.objects.create(user=user, event=event, **validated_data)

    def update(self, instance, validated_data):
        user = validated_data.pop('user')
        username = user.pop('username')
        user = User.objects.get_or_create(username=username)[0]
        instance.user_id = user
        event = validated_data.pop('event')
        event = Event.objects.get_or_create(event_id=event.event_id)[0]
        instance.event = event
        instance.quantity = validated_data['quantity']
        instance.promotional_code = validated_data['promotional_code']
        instance.save()
        return instance


class EventSerializer(serializers.ModelSerializer):
    organisers_name = ExistingUserSerializer()
    event_bookings = BookingSerializer(many=True, read_only=True)
    date_start = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    date_end = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    date_created = serializers.DateTimeField(format='%Y-%m-%d %H:%M', read_only=True)
    last_updated = serializers.DateTimeField(format='%Y-%m-%d %H:%M', read_only=True)
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
        instance.launch_date = validated_data['launch_date']
        instance.is_launched = validated_data['is_launched']
        instance.save()
        return instance
