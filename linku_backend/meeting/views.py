from rest_framework import viewsets

from .serializer import MeetingSerializer, UserSerializer, SubImageSerializer
from .models import Meeting, User, SubImage

from rest_framework.response import Response
from rest_framework import status

class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request, pk=None):
        return Response(status=status.HTTP_400_BAD_REQUEST)


class SubImageViewSet(viewsets.ModelViewSet):
    queryset = SubImage.objects.all()
    serializer_class = SubImageSerializer
