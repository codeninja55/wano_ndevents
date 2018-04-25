from django.contrib import admin
from django.conf.urls import include, url


__author__ = 'codeninja55'


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('NDEvents_api.urls', namespace='api'))
]