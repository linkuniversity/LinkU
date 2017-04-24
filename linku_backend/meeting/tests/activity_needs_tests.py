import pytest
from meeting.models import ActivityNeeds


@pytest.mark.django_db
def test_json_header_when_activity_needs_POST_request(client):
    response = client.post('/activity-needs/', {"contents": "abc"})

    assert 200 == response.status_code
    assert "application/json" == response.get('content-type')


@pytest.mark.django_db
def test_adding_on_needs_db_when_activity_needs_POST_request(client):
    client.post('/activity-needs/', {"contents": "자전거타기"})

    ActivityNeeds.objects.get(contents="자전거타기")

