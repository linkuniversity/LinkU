# -*- coding: utf-8 -*-

from rest_framework import viewsets
from rest_framework.decorators import api_view
from .serializer import MeetingSerializer, UserSerializer, SubImageSerializer, StatisticsSerializer
from .models import Meeting, User, SubImage, UniversityAuthenticationLog, Statistics
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from random import randint
import datetime
import json
import re

from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework import permissions


class StatisticsViewSet(viewsets.ModelViewSet):
    queryset = Statistics.objects.all()
    serializer_class = StatisticsSerializer


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


@api_view(['POST'])
def send_verification_email(request):
    if request.method == 'POST':
        with open('mail_setting.json') as data_file:
            mail_setting = json.load(data_file)
            print(request.POST)
            email = request.POST['university_email']
            print(email)

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
                                                           minutes=2))

            return Response({"message": "Success"})


@api_view(['POST'])
@authentication_classes((TokenAuthentication,))
@permission_classes((permissions.AllowAny,))
def get_participated_ids(request, format=None):
    token = request.META['HTTP_AUTHORIZATION'].replace('Token ','')

    user_participated_ids = Token.objects.get(key=token).user.participated_ids

    return Response(user_participated_ids)


@api_view(['POST'])
def check_university_verification_auth_number(request):
    if request.method == 'POST':
        auth_number = int(request.POST['auth_number'])
        email = request.POST['university_email']

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
