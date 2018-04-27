from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

__author__ = 'codeninja55'


app_name = 'ndevents'


urlpatterns = [
    url(r'^event/$', views.EventListAPIView.as_view()),
    url(r'^event/create/$', views.EventCreateAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/$', views.EventDetailUpdateDestroyAPIView.as_view(), name='event'),
    url(r'^event/(?P<event_id>[0-9]+)/update/$', views.EventDetailUpdateDestroyAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/delete/$', views.EventDetailUpdateDestroyAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/bookings/$', views.BookingsListAPIView.as_view()),
    url(r'^booking/create/$', views.BookingsListAPIView.as_view()),
    url(r'^booking/(?P<booking_id>[0-9]+)/$', views.BookingsRetrieveUpdateDestroyAPIView.as_view()),
    url(r'^booking/(?P<booking_id>[0-9]+)/update/$', views.BookingsRetrieveUpdateDestroyAPIView.as_view()),
    url(r'^booking/(?P<booking_id>[0-9]+)/delete/$', views.BookingsRetrieveUpdateDestroyAPIView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)