from rest_framework import serializers
from .models import Meeting


class MeetingSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Meeting
        fields = ('maker_name', 'title', 'start_time', 'main_image', 'place', 'price', 'num_of_joined_members',
                  'max_num_of_members', 'meeting_specific_info', 'restaurant_name', 'category', 'specific_link', 'appliers')
