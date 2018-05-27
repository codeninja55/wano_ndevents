from django.conf.urls import url
from django.urls import include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_jwt.views import refresh_jwt_token

from . import views

__author__ = 'codeninja55'


app_name = 'ndevents'


urlpatterns = [
    url(r'^auth/', include('rest_auth.urls')),
    url(r'^auth/register/', include('rest_auth.registration.urls')),
    url(r'^refresh-token/', refresh_jwt_token),
    url(r'^user/(?P<pk>[0-9]+)/$', views.UserDetailAPIView.as_view()),
    url(r'^event/$', views.EventListAPIView.as_view()),
    url(r'^event/create/$', views.EventCreateAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/$', views.EventDetailUpdateDestroyAPIView.as_view(), name='event'),
    url(r'^event/(?P<event_id>[0-9]+)/update/$', views.EventDetailUpdateDestroyAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/delete/$', views.EventDetailUpdateDestroyAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/bookings/$', views.BookingsSpecificListAPIView.as_view()),
    url(r'^bookings/$', views.BookingsListAPIView.as_view()),
    url(r'^booking/create/$', views.BookingCreateAPIView.as_view()),
    url(r'^booking/(?P<booking_id>[0-9]+)/$', views.BookingsRetrieveUpdateDestroyAPIView.as_view()),
    url(r'^booking/(?P<booking_id>[0-9]+)/update/$', views.BookingsRetrieveUpdateDestroyAPIView.as_view()),
    url(r'^booking/(?P<booking_id>[0-9]+)/delete/$', views.BookingsRetrieveUpdateDestroyAPIView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)