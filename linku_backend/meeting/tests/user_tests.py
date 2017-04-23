import pytest
import json
from meeting.models import User
from rest_framework.authtoken.models import Token

@pytest.mark.django_db
def create_test_user(client):
    signup_data = {
        'username': 'test@test.com',
        'nickname': 'test nickname',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '01000000000',
        'authenticated_university_email': 'test@authenticated.ac.kr',
    }

    client.post('/users/', signup_data)
    return User.objects.get(username='test@test.com')


def get_login_token(user):
    token = Token.objects.get(user=user)
    print(token.key)
    return token.key


@pytest.mark.django_db
def test_isparticipated_POST_request(client):
    user = create_test_user(client)
    user.participated_ids = json.dumps([1, 3])
    user.save()

    auth_headers = {
        'HTTP_AUTHORIZATION': 'Token ' + get_login_token(user)
    }

    participated_response = client.post('/participated-ids/', {}, **auth_headers)

    assert '[1, 3]' == json.loads(participated_response.content.decode('utf-8'))


@pytest.mark.django_db
def test_apply_alarm_POST_request(client):
    user = create_test_user(client)
    user.participated_ids = json.dumps([1, 3])
    user.save()

    auth_headers = {
        'HTTP_AUTHORIZATION': 'Token ' + get_login_token(user)
    }

    apply_alarm_response = client.post('/apply-alarm/', {'apply_alarm_index': 0}, **auth_headers)

    assert apply_alarm_response.status_code == 200
    assert '[0]' == User.objects.get(username='test@test.com').apply_alarm_indexes

    apply_alarm_response2 = client.post('/apply-alarm/', {'apply_alarm_index': 2}, **auth_headers)

    assert apply_alarm_response2.status_code == 200
    assert '[0, 2]' == User.objects.get(username='test@test.com').apply_alarm_indexes


@pytest.mark.django_db
def test_response_gender_if_request_user_info_with_authenticated_token(client):
    user = create_test_user(client)

    auth_headers = {
        'HTTP_AUTHORIZATION': 'Token ' + get_login_token(user)
    }

    response = client.get('/user/', {}, **auth_headers)

    assert response.status_code == 200
    assert response.data['gender'] == user.gender
