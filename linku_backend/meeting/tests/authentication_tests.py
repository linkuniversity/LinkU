import pytest

from meeting.models import User


@pytest.mark.django_db
def test_create_user_model():
    User.objects.create(email='test email',
                        authenticated_university_email='authenticated@university.com',
                        password='test password',
                        gender='test gender',
                        nickname='test nickname',
                        phone_number='test phone_number')
    User.objects.get(email='test email')


@pytest.mark.django_db
def test_return_400_response_when_user_get_request(client):
    response = client.get('/users/')
    assert response.status_code == 400


@pytest.mark.django_db
def test_sign_up_POST_request(client):
    signup_data = {
        'username': 'test@email.com',
        'nickname': 'test nickname',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '01012341234',
        'authenticated_university_email': 'authenticated@university.com',
    }
    response = client.post('/users/', signup_data)

    assert response.status_code == 201
    assert User.objects.count() == 1
    user = User.objects.get(username='test@email.com')
    assert user.nickname == 'test nickname'


@pytest.mark.django_db
def test_sign_up_fail_with_existent_fields(client):
    User.objects.create(username='test@email.com',
                        nickname='test nickname',
                        gender='M',
                        password='test password',
                        authenticated_university_email='test@authenticated.ac.kr')

    signup_data = {
        'username': 'test@email.com',
        'nickname': 'test nickname',
        'gender': 'F',
        'password': 'test password',
        'authenticated_university_email': 'test@authenticated.ac.kr'
    }

    response = client.post('/users/', signup_data)

    assert response.status_code == 400
    assert 'user with this username already exists.' in response.data['username']
    assert 'user with this nickname already exists.' in response.data['nickname']
    assert 'user with this authenticated university email already exists.' in response.data['authenticated_university_email']


@pytest.mark.django_db
def test_sign_up_fail_with_empty_fields(client):
    signup_data = {}

    response = client.post('/users/', signup_data)

    assert response.status_code == 400
    assert 'This field is required.' in response.data['username']
    assert 'This field is required.' in response.data['nickname']
    assert 'This field is required.' in response.data['gender']
    assert 'This field is required.' in response.data['phone_number']
    assert 'This field is required.' in response.data['password']
    assert 'This field is required.' in response.data['authenticated_university_email']


@pytest.mark.django_db
def test_sign_up_username_field_email_validation(client):
    signup_data = {
        'username': 'test',
        'nickname': 'test nickname',
        'gender': 'F',
        'password': 'test password',
        'authenticated_university_email': 'test@authenticated.ac.kr'
    }

    response = client.post('/users/', signup_data)

    assert response.status_code == 400
    assert 'Enter a valid email address.' in response.data['username']


@pytest.mark.django_db
def test_sign_up_gender_field_validation(client):
    signup_data = {
        'username': 'test@email.com',
        'nickname': 'test nickname',
        'gender': 'A',
        'password': 'test password',
        'authenticated_university_email': 'test@authenticated.ac.kr'
    }

    response = client.post('/users/', signup_data)

    assert response.status_code == 400
    assert '"A" is not a valid choice.' in response.data['gender']


@pytest.mark.django_db
def test_sign_up_phone_number_field_validation(client):
    signup_data = {
        'username': 'test@email.com',
        'nickname': 'test nickname',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '010123424',
        'authenticated_university_email': 'test@authenticated.ac.kr'
    }

    response = client.post('/users/', signup_data)

    assert response.status_code == 400
    assert 'Phone length has to be 11 & Only number' in response.data['phone_number']

    signup_data['phone_number'] = '0101234123a'
    response = client.post('/users/', signup_data)

    assert response.status_code == 400
    assert 'Phone length has to be 11 & Only number' in response.data['phone_number']


@pytest.mark.django_db
def test_correct_login(client):
    login_data = {
        'username': 'test@test.com',
        'password': 'test password',
    }

    response = client.post('/login/', login_data)

    assert response.status_code == 400
    assert 'Unable to log in with provided credentials.' in response.data['non_field_errors']

    signup_data = {
        'username': 'test@test.com',
        'nickname': 'test nickname',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '01000000000',
        'authenticated_university_email': 'test@authenticated.ac.kr'
    }

    client.post('/users/', signup_data)
    response = client.post('/login/', login_data)

    assert response.status_code == 200
    assert 'token' in response.data.keys()
