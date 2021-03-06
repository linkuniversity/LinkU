import pytest
import datetime

from meeting.models import Meeting, StatusByDay, SubImage, User
from meeting.serializer import MeetingSerializer

SAVED_TEST_IMAGE_NAME = 'test_image.jpg'
SAVED_TEST_IMAGE_NAME2 = 'test_image2.jpg'
MEETING_LEADER_TEST_IMAGE = 'test_meeting_leader.png'

@pytest.mark.django_db
def test_json_header_when_meetings_GET_request(client):
    response = client.get('/meetings/')

    assert 200 == response.status_code
    assert "application/json" == response.get('content-type')


@pytest.mark.django_db
def test_create_meeting_model():
    Meeting.objects.create(
        place="테스트역 2번툴구",
        leader_image=MEETING_LEADER_TEST_IMAGE,
        leader_talk="test meeting1 specific info")


@pytest.mark.django_db
def test_correct_json_data_when_meetings_GET_request(client):
    meetings = []

    temp_meeting = Meeting.objects.get(title='test current meeting title')

    meetings.append(temp_meeting)

    response = client.get('/meetings/')

    for index, meeting in enumerate(meetings):
        origin_data = MeetingSerializer(instance=meeting).data
        api_response_data = response.data[index]
        for key in origin_data.keys():
            if key == "main_image" or key == "leader_image":
                assert origin_data[key] in api_response_data[key]
            else:
                assert origin_data[key] == api_response_data[key]


@pytest.mark.django_db
def test_correct_json_data_when_meeting_GET_request(client):
    temp_meeting = Meeting.objects.get(title='test current meeting title')

    response = client.get('/meetings/%d/' % temp_meeting.id)

    origin_data = MeetingSerializer(temp_meeting).data

    api_response_data = response.data
    for key in origin_data.keys():
        if key == "main_image" or key == "leader_image":
            assert origin_data[key] in api_response_data[key]
        else:
            assert origin_data[key] == api_response_data[key]


@pytest.mark.django_db
def test_meeting_has_many_sub_images(client):
    sub_images = []

    temp_meeting = Meeting.objects.get(title='test current meeting title')

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


@pytest.mark.django_db
def test_update_participation_info_when_someone_apply_meeting(client):
    meeting = Meeting.objects.get(title='test current meeting title')

    response = client.get('/meetings/%d/' % meeting.id)
    status_by_days_data_list = response.data['status_by_days']
    for status_by_days_data in status_by_days_data_list:
        assert status_by_days_data['participant_num']['man'] == 0
        assert status_by_days_data['participant_num']['woman'] == 0

    signup_data = {
        'username': 'test@test.com',
        'name': 'test name',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '01000000000',
        'authenticated_university_email': 'test@authenticated.ac.kr'
    }
    client.post('/users/', signup_data)

    MEETING_STATUS_INDEX = 1
    statusByDays = StatusByDay.objects.filter(meeting=meeting)

    user = User.objects.get(username='test@test.com')
    statusByDays[MEETING_STATUS_INDEX].appliers.add(user)
    statusByDays[MEETING_STATUS_INDEX].save()

    response = client.get('/meetings/%d/' % meeting.id)
    status_by_days_data_list = response.data['status_by_days']
    for index, status_by_days_data in enumerate(status_by_days_data_list):
        if index == MEETING_STATUS_INDEX:
            assert status_by_days_data['participant_num']['man'] == 1
            assert status_by_days_data['participant_num']['woman'] == 0
        else:
            assert status_by_days_data['participant_num']['man'] == 0
            assert status_by_days_data['participant_num']['woman'] == 0


@pytest.mark.django_db
def test_apply_meeting_with_api(client):
    signup_data = {
        'username': 'test@test.com',
        'name': 'test name',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '01000000000',
        'authenticated_university_email': 'test@authenticated.ac.kr'
    }
    client.post('/users/', signup_data)

    MEETING_STATUS_INDEX = 1

    apply_data = {
        'username': 'test@test.com',
        'status_index': MEETING_STATUS_INDEX,
    }

    meeting = Meeting.objects.get(title='test current meeting title')
    response = client.post('/meetings/%d/apply/' % meeting.id, apply_data)
    assert response.data == 'success'

    user = User.objects.get(username='test@test.com')
    status = user.statusbyday_set.all()[0]
    assert status.start_time == StatusByDay.objects.filter(meeting=meeting)[1].start_time


@pytest.mark.django_db
def test_leave_meeting_with_api(client):
    signup_data = {
        'username': 'test@test.com',
        'name': 'test name',
        'gender': 'M',
        'password': 'test password',
        'phone_number': '01000000000',
        'authenticated_university_email': 'test@authenticated.ac.kr'
    }
    client.post('/users/', signup_data)

    MEETING_STATUS_INDEX = 1

    apply_data = {
        'username': 'test@test.com',
        'status_index': MEETING_STATUS_INDEX,
    }

    meeting = Meeting.objects.get(title='test current meeting title')
    client.post('/meetings/%d/apply/' % meeting.id, apply_data)

    user = User.objects.get(username='test@test.com')
    assert user.statusbyday_set.all().count() == 1

    wrong_leave_data = {
        'username': 'test@test.com',
        'status_index': MEETING_STATUS_INDEX - 1
    }

    response = client.post('/meetings/%d/leave/' % meeting.id, wrong_leave_data)
    assert response.data == "fail"
    assert user.statusbyday_set.all().count() == 1

    correct_leave_data = {
        'username': 'test@test.com',
        'status_index': MEETING_STATUS_INDEX
    }
    response = client.post('/meetings/%d/leave/' % meeting.id, correct_leave_data)
    assert response.data == "success"
    assert user.statusbyday_set.all().count() == 0


@pytest.mark.django_db
def test_get_current_meeting_info(client):
    response = client.get('/meetings/current/')
    assert response.data['title'] == 'test current meeting title'


@pytest.mark.django_db
def test_get_prearranged_meeting_info(client):
    response = client.get('/meetings/prearranged/')
    assert response.data['title'] == 'test prearranged meeting title'


