from rest_framework import serializers
from .models import Meeting


class MeetingSerializer(serializers.Serializer):
    class Meta:
        model = Meeting
        fields = ('maker')