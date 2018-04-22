from rest_framework import serializers
from .models import Event
from django.contrib.auth.models import User


__author__ = 'codeninja55'


class EventSerializer(serializers.ModelSerializer):
    organisers_name = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    date_start = serializers.DateField(format='%Y-%m-%d')
    date_end = serializers.DateField(format='%Y-%m-%d')
    time_start = serializers.TimeField(format='%H:%M')
    time_end = serializers.TimeField(format='%H:%M')
    self = serializers.HyperlinkedIdentityField(read_only=True, view_name='ndevents:event',
                                                lookup_field='event_id')

    class Meta:
        model = Event
        fields = '__all__'


class EventCreateUpdateSerializer(serializers.ModelSerializer):
    organisers_name = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    date_start = serializers.DateField(format='%Y-%m-%d')
    date_end = serializers.DateField(format='%Y-%m-%d')
    time_start = serializers.TimeField(format='%H:%M')
    time_end = serializers.TimeField(format='%H:%M')

    class Meta:
        model = Event
        fields = (
            'organisers_name',
            'title',
            'description',
            'venue',
            'capacity_max',
            'capacity_expected',
            'date_start',
            'date_end',
            'time_start',
            'time_end',
            'launch_date',
            'is_launched',
            'date_created',
            'last_updated',
        )
