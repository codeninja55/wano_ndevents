from rest_framework import serializers
from .models import Event
from django.contrib.auth.models import User


__author__ = 'codeninja55'


class EventSerializer(serializers.ModelSerializer):
    organisers_name = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    date_start = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    date_end = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    date_created = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    last_updated = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    self = serializers.HyperlinkedIdentityField(read_only=True, view_name='ndevents:event',
                                                lookup_field='event_id')

    class Meta:
        model = Event
        fields = '__all__'


class EventCreateUpdateSerializer(serializers.ModelSerializer):
    organisers_name = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    date_start = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    date_end = serializers.DateTimeField(format='%Y-%m-%d %H:%M')

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
            'launch_date',
            'is_launched',
        )
