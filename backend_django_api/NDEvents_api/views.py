from django.http import Http404
from rest_framework.generics import (
    RetrieveUpdateAPIView, RetrieveDestroyAPIView, CreateAPIView, ListAPIView,
    ListCreateAPIView, RetrieveUpdateDestroyAPIView)
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Event, Ticket
from .serializers import EventSerializer, EventCreateUpdateSerializer, TicketSerializer


class EventListAPIView(ListAPIView):
    """
    This Event API endpoint will return a list of events that can also be created.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetailAPIView(APIView):
    """
    This Event API endpoint will return a single event from the event_id
    """

    def get_object(self, event_id):
        try:
            return Event.objects.get(event_id=event_id)
        except Event.DoesNotExist:
            return Http404

    def get(self, request, event_id):
        event = self.get_object(event_id=event_id)
        serializer_context = {
            'request': request,
        }
        serializer = EventSerializer(event, context=serializer_context)
        return Response(serializer.data)


class EventCreateAPIView(CreateAPIView):
    """
    This Event API endpoint will allow create-only post method handler
    """
    queryset = Event.objects.all()
    serializer_class = EventCreateUpdateSerializer


class EventDetailUpdateAPIView(RetrieveUpdateAPIView):
    """
    This Event API endpoint will allow read or update to represent a single model instance
    """
    queryset = Event.objects.all()
    serializer_class = EventCreateUpdateSerializer
    lookup_field = 'event_id'


class EventDeleteAPIView(RetrieveDestroyAPIView):
    """
    This Event API endpoint will allow delete of a single event based on event_id
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'event_id'


class TicketListAPIView(ListCreateAPIView):
    """
    This Ticket API endpoint will allow list retrieval and creating of tickets.
    """
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
    lookup_field = 'ticket_id'


class TicketRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    This Ticket API endpoint will allow update and destroy of a single ticket based on ticket_id
    """
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
    lookup_field = 'ticket_id'
