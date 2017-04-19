import pytest
from rest_framework.test import APIClient
import base64


@pytest.mark.django_db
def test_isparticipated_POST_request(client):
    signup_data = {
        'username': 'test@test.com',
        'nickname': 'test nickname',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '01000000000',
        'authenticated_university_email': 'test@authenticated.ac.kr',
        'is_participated': True
    }

    client.post('/users/', signup_data)

    login_data = {
        'username': 'test@test.com',
        'password': 'test password',
    }

    login_response = client.post('/login/', login_data)

    token = login_response.data['token']

    auth_headers = {
        'HTTP_AUTHORIZATION': 'Token ' + token
    }

    isparticipated_response = client.post('/isparticipated/', login_data, **auth_headers)

    assert 'true' == isparticipated_response.content.decode('utf-8')
