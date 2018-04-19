from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


__author__ = 'codeninja55'


urlpatterns = [
    url(r'^event/$', views.EventListAPIView.as_view()),
    url(r'^event/(?P<event_id>[0-9]+)/$', views.EventDetailAPIView.as_view()),
    # url(r'^event/<event_id>/update$', views.EventDetailUpdateAPIView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
