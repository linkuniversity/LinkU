from rest_framework import serializers
from .models import Meeting


class MeetingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Meeting
        fields = ('maker', 'name', 'start_time', 'image_path', 'distance_near_univ', 'price_range')
