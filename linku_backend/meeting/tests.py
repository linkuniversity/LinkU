import pytest
import datetime
from meeting.models import Meeting
from django.core import serializers
from rest_framework.test import APIRequestFactory

import json


def test_url_get_meetings(client):
    response = client.get('/meetings/')

    assert 200 == response.status_code
    assert "application/json" == response.get('content-type')


@pytest.mark.django_db
def test_create_meeting_model():
    Meeting.objects.create(maker='test maker', name='test name', place='test place',
                           start_time=datetime.datetime.now(),
                           distance_near_univ='test distance_near_univ', price_range='test price_range')
    Meeting.objects.get(name='test name')


@pytest.mark.django_db
def test_json_data_from_get_meetings_request(client):
    meeting = Meeting.objects.create(maker='test maker', name='test name', place='test place',
                                     start_time=datetime.datetime.now(),
                                     distance_near_univ='test distance_near_univ', price_range='test price_range')

    response = client.get('/meetings/',)

    expected_data = serializers.serialize('json', [meeting, ])

    assert json.loads(expected_data)[0] == json.loads(response.content.decode('utf-8'))
