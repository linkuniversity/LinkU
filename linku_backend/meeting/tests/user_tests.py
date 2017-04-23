import pytest
import json

from rest_framework.authtoken.models import Token

from meeting.models import User, Meeting, StatusByDay


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
    return Token.objects.get(user=user).key


@pytest.mark.django_db
def test_get_participated_meeting_list(client):
    meeting = Meeting.objects.get(title='test title')
    user = create_test_user(client)
    status_list = StatusByDay.objects.filter(meeting=meeting)

    status_list[0].appliers.add(user)
    status_list[0].save()
    status_list[2].appliers.add(user)
    status_list[2].save()

    auth_headers = {
        'HTTP_AUTHORIZATION': 'Token ' + get_login_token(user)
    }

    participated_response = client.post('/participated-dates/', {}, **auth_headers)

    expected_data = [status_list[0].start_time, status_list[2].start_time]
    assert expected_data == participated_response.data


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
