import pytest
import datetime
import os

from django.conf import settings
from meeting.models import Meeting, User, Comment
from meeting.serializer import MeetingSerializer

SAVED_TEST_IMAGE_NAME = settings.MEDIA_ROOT + 'test_image.jpg'


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
    User.objects.create(name="test name",
                        email='test email',
                        password='test password',
                        gender='test gender',
                        nickname='test nickname',
                        phone_number='test phone_number',
                        is_authenticated_university_student=False)
    User.objects.get(name='test name')


@pytest.mark.django_db
def test_create_comment_model():
    user = User.objects.create(name="test name",
                               email='test email',
                               password='test password',
                               gender='test gender',
                               nickname='test nickname',
                               phone_number='test phone_number',
                               is_authenticated_university_student=False)
    Comment.objects.create(user=user, comment='test comment')
    Comment.objects.get(user=user)


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

    response = client.get('/meetings/' + "?format=json")

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

    response = client.get('/meetings/' + str(meeting.id) + "/?format=json")

    origin_data = MeetingSerializer(meeting).data
    api_response_data = response.data
    for key in origin_data.keys():
        if key == "main_image":
            assert origin_data[key] in api_response_data[key]
        else:
            assert origin_data[key] == api_response_data[key]
