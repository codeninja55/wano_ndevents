from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


__author__ = 'codeninja55'


app_name = 'ndevents'


urlpatterns = [
    url(r'^event/$', views.EventListAPIView.as_view()),
    url(r'^event/create/$', views.EventCreateAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/$', views.EventDetailUpdateAPIView.as_view(), name='event'),
    url(r'^event/(?P<event_id>[0-9]+)/update/$', views.EventDetailUpdateAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/delete/$', views.EventDeleteAPIView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
