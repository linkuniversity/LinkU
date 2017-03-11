from rest_framework import viewsets
from meeting.models import Meeting
from meeting.serializer import MeetingSerializer


class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer
