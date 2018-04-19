from rest_framework import serializers
from .models import Event


__author__ = 'codeninja55'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            'event_id',
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
            'is_launched'
        )
