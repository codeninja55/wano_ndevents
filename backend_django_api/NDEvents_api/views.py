from rest_framework.generics import (
    CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView)

from .models import Event, Booking
from .serializers import EventSerializer, BookingSerializer


class EventListAPIView(ListCreateAPIView):
    """
    This Event API endpoint will return a list of events that can also be created.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'event_id'


# class EventDetailAPIView(APIView):
#     """
#     This Event API endpoint will return a single event from the event_id
#     """
#
#     def get_object(self, event_id):
#         try:
#             return Event.objects.get(event_id=event_id)
#         except Event.DoesNotExist:
#             return Http404
#
#     def get(self, request, event_id):
#         event = self.get_object(event_id=event_id)
#         serializer_context = {
#             'request': request,
#         }
#         serializer = EventSerializer(event, context=serializer_context)
#         return Response(serializer.data)


class EventCreateAPIView(CreateAPIView):
    """
    This Event API endpoint will allow create-only post method handler
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'event_id'


class EventDetailUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    This Event API endpoint will allow retrieve, update or destroy to represent a single model instance
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'event_id'


class BookingsListAPIView(ListAPIView):
    """
    This Booking API endpoint will allow list retrieval of all Bookings.
    """
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()


class BookingsSpecificListAPIView(ListAPIView):
    """
    This Booking API endpoint will allow a list retrieval specific to the Event for the booking object.
    """
    serializer_class = BookingSerializer

    def get_queryset(self):
        """
        This view should return a list of all the bookings for
        the event as determined by the event_id portion of the URL.
        """
        event_id = self.kwargs['event_id']
        return Booking.objects.filter(event_id=event_id)


class BookingCreateAPIView(CreateAPIView):
    """
    This Booking API endpoint will allow create access to the Booking model.
    """
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()


class BookingsRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    This Booking API endpoint will allow update and destroy of a single ticket based on ticket_id
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    lookup_field = 'booking_id'
