import pytest
import json
from meeting.models import User


def get_login_token(client):
    signup_data = {
        'username': 'test@test.com',
        'nickname': 'test nickname',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '01000000000',
        'authenticated_university_email': 'test@authenticated.ac.kr',
        'participated_ids': json.dumps([1, 3])
    }

    client.post('/users/', signup_data)

    login_data = {
        'username': 'test@test.com',
        'password': 'test password',
    }

    login_response = client.post('/login/', login_data)

    login_token = login_response.data['token']

    return login_token


@pytest.mark.django_db
def test_isparticipated_POST_request(client):
    auth_headers = {
        'HTTP_AUTHORIZATION': 'Token ' + get_login_token(client)
    }

    participated_response = client.post('/participated-ids/', {}, **auth_headers)

    assert '[1, 3]' == json.loads(participated_response.content.decode('utf-8'))


@pytest.mark.django_db
def test_apply_alarm_POST_request(client):
    auth_headers = {
        'HTTP_AUTHORIZATION': 'Token ' + get_login_token(client)
    }

    apply_alarm_response = client.post('/apply-alarm/', {'apply_alarm_index': 0}, **auth_headers)

    assert apply_alarm_response.status_code == 200
    assert '[0]' == User.objects.get(username='test@test.com').apply_alarm_indexes

    apply_alarm_response2 = client.post('/apply-alarm/', {'apply_alarm_index': 2}, **auth_headers)

    assert apply_alarm_response2.status_code == 200
    assert '[0, 2]' == User.objects.get(username='test@test.com').apply_alarm_indexes
