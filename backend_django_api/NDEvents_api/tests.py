from datetime import datetime

from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.test import TestCase
from .models import Event

__author__ = 'codeninja55'


class EventModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = get_user_model().objects.create(
            username='codeninja2',
            email='dbac496@uowmail.edu.au',
            password='secret123'
        )

        Event.objects.create(organisers_name=user, organisers_name_id=user.id)
        Event.objects.create(title="Test case 1")
        Event.objects.create(description="Test case 1 description")
        Event.objects.create(date_start=datetime.now())
        Event.objects.create(date_end=datetime.now())

    def test_title_content(self):
        event = Event.objects.get(event_id=1)
        expected_title_name = f'{event.title}'
        self.assertEquals(expected_title_name, "Test case 1")

    def test_description_content(self):
        event = Event.objects.get(event_id=1)
        expected_description = f'{event.description}'
        self.assertEqual(expected_description, "Test case 1 description")

    def test_is_launched(self):
        event = Event.objects.get(event_id=1)
        expected_is_launched = False
        self.assertIs(expected_is_launched, event.is_launched)
