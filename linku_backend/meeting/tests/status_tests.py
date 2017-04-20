import pytest
from meeting.models import Statistics


@pytest.mark.django_db
def test_GET_request_status(client):
    response = client.get('/statistics/')

    assert response.status_code == 200


@pytest.mark.django_db
def test_response_when_user_GET_request(client):
    response = client.get('/statistics/')

    expect_data = '[{"num_of_applier":154,"created_meeting":24,"new_meet_person":117}]'

    assert expect_data == response.content.decode('utf-8')
