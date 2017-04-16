import pytest
import datetime

from meeting.models import Meeting, StatusByDay, SubImage
from meeting.serializer import MeetingSerializer
from rest_framework.request import Request

SAVED_TEST_IMAGE_NAME = 'test_image.jpg'
SAVED_TEST_IMAGE_NAME2 = 'test_image2.jpg'


@pytest.fixture(scope="module")
def temp_meeting_data():
    temp_meeting = Meeting.objects.create(maker_name='test maker_name',
                                          title='test title',
                                          place='test place',
                                          price=5000,
                                          meeting_specific_info='test meeting_specific_info',
                                          restaurant_name='test restaurant_name',
                                          category='tes category',
                                          specific_link='test specific_link',
                                          main_image=SAVED_TEST_IMAGE_NAME,
                                          )

    StatusByDay.objects.create(start_time=datetime.datetime.now(),
                               num_of_joined_members=1,
                               max_num_of_members=6,
                               meeting=temp_meeting)

    return temp_meeting


@pytest.mark.django_db
def test_json_header_when_meetings_GET_request(client):
    response = client.get('/meetings/')

    assert 200 == response.status_code
    assert "application/json" == response.get('content-type')


@pytest.mark.django_db
def test_create_meeting_model():
    Meeting.objects.get(title='test title')


@pytest.mark.django_db
def test_correct_json_data_when_meetings_GET_request(client):
    meetings = []

    temp_meeting = Meeting.objects.get(title='test title')

    meetings.append(temp_meeting)

    response = client.get('/meetings/')

    for index, meeting in enumerate(meetings):
        origin_data = MeetingSerializer(instance=meeting).data
        api_response_data = response.data[index]
        for key in origin_data.keys():
            if key == "main_image":
                assert origin_data[key] in api_response_data[key]
            else:
                assert origin_data[key] == api_response_data[key]


@pytest.mark.django_db
def test_correct_json_data_when_meeting_GET_request(client):
    temp_meeting = Meeting.objects.get(title='test title')

    response = client.get('/meetings/%d/' % temp_meeting.id)

    origin_data = MeetingSerializer(temp_meeting).data

    api_response_data = response.data
    for key in origin_data.keys():
        if key == "main_image":
            assert origin_data[key] in api_response_data[key]
        else:
            assert origin_data[key] == api_response_data[key]


@pytest.mark.django_db
def test_meeting_has_many_sub_images(client):
    sub_images = []

    temp_meeting = Meeting.objects.get(title='test title')

    sub_images.append(SubImage.objects.create(path=SAVED_TEST_IMAGE_NAME, meeting=temp_meeting))
    sub_images.append(SubImage.objects.create(path=SAVED_TEST_IMAGE_NAME2, meeting=temp_meeting))
    sub_images.append(SubImage.objects.create(path=SAVED_TEST_IMAGE_NAME, meeting=temp_meeting))

    response = client.get('/meetings/%d/' % temp_meeting.id)
    assert response.status_code == 200

    api_response_data = response.data
    assert 'sub_images' in api_response_data.keys()

    response_sub_images = api_response_data['sub_images']
    for i in range(3):
        assert sub_images[i].path.url in response_sub_images[i]['path']
