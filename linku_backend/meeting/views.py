# -*- coding: utf-8 -*-

from rest_framework import viewsets
from .serializer import MeetingSerializer, UserSerializer, SubImageSerializer, StatisticsSerializer, ActivityNeedsSerializer
from .models import Meeting, User, SubImage, UniversityAuthenticationLog, Statistics, StatusByDay, ActivityNeeds
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from random import randint
import datetime
import json
import re

from rest_framework.response import Response
from rest_framework import status

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes, detail_route, list_route


class StatisticsViewSet(viewsets.ModelViewSet):
    queryset = Statistics.objects.all()
    serializer_class = StatisticsSerializer


class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

    def create(self, request):
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'])
    def current(self, request):
        meetings = Meeting.objects.filter(is_current=True)
        serializer = MeetingSerializer(meetings[0])
        return Response(serializer.data)

    @list_route(methods=['get'])
    def prearranged(self, request):
        meetings = Meeting.objects.filter(is_prearranged=True)
        serializer = MeetingSerializer(meetings[0])
        return Response(serializer.data)

    @detail_route(methods=['post'], url_path='apply')
    def apply(self, request, pk=None):
        meeting = Meeting.objects.get(pk=pk)
        status_list = StatusByDay.objects.filter(meeting=meeting)
        status_index = int(request.data['status_index'])

        user = User.objects.get(username=request.data['username'])

        status_list[status_index].appliers.add(user)
        status_list[status_index].save()
        return Response("success")

    @detail_route(methods=['post'], url_path='leave')
    def leave(self, request, pk=None):
        meeting = Meeting.objects.get(pk=pk)
        status_list = StatusByDay.objects.filter(meeting=meeting)
        status_index = int(request.data['status_index'])

        user = User.objects.get(username=request.data['username'])
        status = status_list[status_index]
        if user.statusbyday_set.filter(id=status.id).exists():
            status.appliers.remove(user)
            return Response("success")

        return Response("fail")


class ActivityNeedsViewSet(viewsets.ModelViewSet):
    queryset = ActivityNeeds.objects.all()
    serializer_class = ActivityNeedsSerializer

    def create(self, request):
        ActivityNeeds.objects.create(contents=request.POST['contents'])
        return Response({"Message": "Success"})


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        return Response(status=status.HTTP_400_BAD_REQUEST)


class SubImageViewSet(viewsets.ModelViewSet):
    queryset = SubImage.objects.all()
    serializer_class = SubImageSerializer


@api_view(['POST'])
def send_verification_email(request):
    if request.method == 'POST':
        if request.POST['university_email'] == 'linkutest@test.ac.kr':
            return Response({"message": "Success"})

        with open('mail_setting.json') as data_file:
            mail_setting = json.load(data_file)
            email = request.POST['university_email']

            if User.objects.filter(authenticated_university_email=email).exists():
                return Response({"message": "University Mail Already Exist"}, status=status.HTTP_400_BAD_REQUEST)

            email_regex = re.compile("(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
            match_result = email_regex.match(email)
            if match_result is False:
                return Response({"message": "Invalid Mail Form"}, status=status.HTTP_400_BAD_REQUEST)

            if email[-6:] != ".ac.kr":
                return Response({"message": "Invalid University Mail Form"}, status=status.HTTP_400_BAD_REQUEST)

            auth_number = randint(1000, 9999)

            from_addr = mail_setting['email']
            to_addr = email

            server = smtplib.SMTP('smtp.gmail.com:587')
            server.starttls()

            server.login(from_addr, mail_setting['password'])

            body = MIMEMultipart()
            body['subject'] = "LinkU 인증 메일입니다."
            body['From'] = from_addr
            body['To'] = to_addr

            html = "<div> 안녕하세요 LinkU입니다. <br> 다음 아래 번호를 입력 시간내에 입력해주세요. <br><br>" \
                   + str(auth_number) \
                   + "<br><br> LinkU 드림 </div>"
            msg = MIMEText(html, 'html')
            body.attach(msg)

            server.sendmail(from_addr=from_addr,
                            to_addrs=[to_addr],  # list, str 둘 다 가능
                            msg=body.as_string())

            server.quit()

            UniversityAuthenticationLog.objects.create(email=email
                                                       , auth_number=auth_number
                                                       , sent_to_user_time=datetime.datetime.now()
                                                       ,
                                                       auth_number_expiration_time=datetime.datetime.now() + datetime.timedelta(
                                                           minutes=15))

            return Response({"message": "Success"})


@api_view(['GET'])
@authentication_classes((TokenAuthentication,))
@permission_classes((IsAuthenticated,))
def get_user_info(request, format=None):
    return Response({"gender": request.user.gender})


@api_view(['GET'])
@authentication_classes((TokenAuthentication,))
@permission_classes((IsAuthenticated,))
def get_participated_dates(request, format=None):
    status_list = request.user.statusbyday_set.all()
    response_data = []
    for status in status_list:
        response_data.append(status.start_time)

    return Response(response_data)


@api_view(['POST'])
@authentication_classes((TokenAuthentication,))
@permission_classes((IsAuthenticated,))
def apply_alarm(request, format=None):
    if request.method == 'POST':
        apply_alarm_list = json.loads(request.user.apply_alarm_indexes)
        apply_alarm_list.append(int(request.POST['apply_alarm_index']))

        request.user.apply_alarm_indexes = json.dumps(apply_alarm_list)
        request.user.save()

        return Response({"Message": "Success"})

    return Response({"Message": "Bad Request"})


@api_view(['POST'])
@authentication_classes((TokenAuthentication,))
@permission_classes((IsAuthenticated,))
def next_meeting_alarm(request, format=None):
    if request.method == 'POST':
        user = request.user
        if user.next_meeting_alarm:
            return Response({"Message": "Already Done"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            user.next_meeting_alarm = True
            user.save()
            return Response({"Message": "Success"})


@api_view(['POST'])
@authentication_classes((TokenAuthentication,))
@permission_classes((IsAuthenticated,))
def leave_user(request):
    if request.method == 'POST':
        request.user.delete()
        return Response({"Message": "Success"})
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def check_university_verification_auth_number(request):
    if request.method == 'POST':
        auth_number = int(request.POST['auth_number'])
        email = request.POST['university_email']

        if email == 'linkutest@test.ac.kr':
            return Response({"message": "Success"})

        logs = UniversityAuthenticationLog.objects.filter(email=email).order_by('-sent_to_user_time')

        if len(logs) == 0:
            return Response({"message": "No such email"}, status=status.HTTP_400_BAD_REQUEST)

        latest_log = logs[0]

        if latest_log.auth_number_expiration_time < datetime.datetime.now():
            return Response({"message": "Time Out"}, status=status.HTTP_400_BAD_REQUEST)

        else:

            if latest_log.auth_number == auth_number:
                latest_log.is_authenticated = True
                latest_log.save()
                return Response({"message": "Success"})

            else:
                return Response({"message": "Wrong Auth Number"}, status=status.HTTP_400_BAD_REQUEST)
