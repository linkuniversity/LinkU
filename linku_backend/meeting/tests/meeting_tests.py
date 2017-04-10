import pytest
import datetime

from meeting.models import Meeting, User, SubImage
from meeting.serializer import MeetingSerializer

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
