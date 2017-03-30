from rest_framework import serializers
from .models import Meeting, User


class MeetingSerializer(serializers.HyperlinkedModelSerializer):
    main_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Meeting
        fields = ('id', 'maker_name', 'title', 'start_time', 'main_image', 'place', 'price', 'num_of_joined_members',
                  'max_num_of_members', 'meeting_specific_info', 'restaurant_name', 'category', 'specific_link', 'appliers')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('nickname', 'gender', 'email', 'password', 'authenticated_university_email', 'is_authenticated_university_student')
