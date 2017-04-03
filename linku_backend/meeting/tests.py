import pytest
import datetime

from meeting.models import Meeting, User, SubImage
from meeting.serializer import MeetingSerializer
from rest_framework.test import APITestCase

SAVED_TEST_IMAGE_NAME = 'test_image.jpg'
SAVED_TEST_IMAGE_NAME2 = 'test_image2.jpg'

@pytest.mark.django_db
def test_json_header_when_meetings_GET_request(client):
    response = client.get('/meetings/')

    assert 200 == response.status_code
    assert "application/json" == response.get('content-type')


@pytest.mark.django_db
def test_create_meeting_model():
    Meeting.objects.create(maker_name='test maker_name',
                           title='test title',
                           start_time=datetime.datetime.now(),
                           place='test place',
                           price=5000,
                           num_of_joined_members=1,
                           max_num_of_members=6,
                           meeting_specific_info='test meeting_specific_info',
                           restaurant_name='test restaurant_name',
                           category='tes category',
                           specific_link='test specific_link',
                           main_image=SAVED_TEST_IMAGE_NAME)
    Meeting.objects.get(maker_name='test maker_name')


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
def test_correct_json_data_when_meetings_GET_request(client):
    meetings = []
    meetings.append(Meeting.objects.create(maker_name='test maker_name1',
                                           title='test title1',
                                           start_time=datetime.datetime.now(),
                                           place='test place1',
                                           price=5000,
                                           num_of_joined_members=1,
                                           max_num_of_members=6,
                                           meeting_specific_info='test meeting_specific_info1',
                                           restaurant_name='test restaurant_name1',
                                           category='tes category1',
                                           specific_link='test specific_link1'))

    meetings.append(Meeting.objects.create(maker_name='test maker_name2',
                                           title='test title2',
                                           start_time=datetime.datetime.now(),
                                           place='test place2',
                                           price=6000,
                                           num_of_joined_members=1,
                                           max_num_of_members=6,
                                           meeting_specific_info='test meeting_specific_info2',
                                           restaurant_name='test restaurant_name2',
                                           category='tes category2',
                                           specific_link='test specific_link2'))

    response = client.get('/meetings/')

    for index, meeting in enumerate(meetings):
        origin_data = MeetingSerializer(meeting).data
        api_response_data = response.data[index]
        for key in origin_data.keys():
            if key == "main_image":
                assert origin_data[key] in api_response_data[key]
            else:
                assert origin_data[key] == api_response_data[key]


@pytest.mark.django_db
def test_correct_json_data_when_meeting_GET_request(client):
    meeting = Meeting.objects.create(maker_name='test maker_name',
                                     title='test title',
                                     start_time=datetime.datetime.now(),
                                     place='test place',
                                     price=5000,
                                     num_of_joined_members=1,
                                     max_num_of_members=6,
                                     meeting_specific_info='test meeting_specific_info',
                                     restaurant_name='test restaurant_name',
                                     category='tes category',
                                     specific_link='test specific_link')

    response = client.get('/meetings/%d/' % meeting.id)

    origin_data = MeetingSerializer(meeting).data
    api_response_data = response.data
    for key in origin_data.keys():
        if key == "main_image":
            assert origin_data[key] in api_response_data[key]
        else:
            assert origin_data[key] == api_response_data[key]


@pytest.mark.django_db
def test_meeting_has_many_sub_images(client):
    meeting = Meeting.objects.create(maker_name='test maker_name',
                                     title='test title',
                                     start_time=datetime.datetime.now(),
                                     place='test place',
                                     price=5000,
                                     num_of_joined_members=1,
                                     max_num_of_members=6,
                                     meeting_specific_info='test meeting_specific_info',
                                     restaurant_name='test restaurant_name',
                                     category='tes category',
                                     specific_link='test specific_link')

    sub_images = []
    sub_images.append(SubImage.objects.create(path=SAVED_TEST_IMAGE_NAME, meeting=meeting))
    sub_images.append(SubImage.objects.create(path=SAVED_TEST_IMAGE_NAME2, meeting=meeting))
    sub_images.append(SubImage.objects.create(path=SAVED_TEST_IMAGE_NAME, meeting=meeting))

    response = client.get('/meetings/%d/' % meeting.id)
    assert response.status_code == 200

    api_response_data = response.data
    assert 'sub_images' in api_response_data.keys()

    response_sub_images = api_response_data['sub_images']
    for i in range(3):
        assert sub_images[i].path.url in response_sub_images[i]['path']


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
