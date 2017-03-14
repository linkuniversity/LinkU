import pytest
import datetime

from meeting.models import Meeting


@pytest.mark.django_db
def test_json_header_when_meetings_GET_request(client):
    response = client.get('/meetings/')

    assert 200 == response.status_code
    assert "application/json" == response.get('content-type')


@pytest.mark.django_db
def test_create_meeting_model():
    Meeting.objects.create(maker='test maker', name='test name', start_time=datetime.datetime.now(),
                           distance_near_univ='test distance_near_univ', price_range='test price_range')
    Meeting.objects.get(name='test name')


@pytest.mark.django_db
def test_correct_json_data_when_meetings_GET_request(client):
    Meeting.objects.create(maker='test maker1', name='test name1', start_time=datetime.datetime.now(),
                                     distance_near_univ='test distance_near_univ1', price_range='test price_range1')

    Meeting.objects.create(maker='test maker2', name='test name2', start_time=datetime.datetime.now(),
                           distance_near_univ='test distance_near_univ2', price_range='test price_range2')

    response = client.get('/meetings/')

    expected_data = [{
        'maker': 'test maker1',
        'name': 'test name1',
        'distance_near_univ': 'test distance_near_univ1',
    }, {
        'maker': 'test maker2',
        'name': 'test name2',
        'distance_near_univ': 'test distance_near_univ2',
    }]

    for meeting_data in expected_data:
        for key in meeting_data:
            assert key in response.content.decode('utf-8')
            assert meeting_data[key] in response.content.decode('utf-8')

    assert 'start_time' in response.content.decode('utf-8')
