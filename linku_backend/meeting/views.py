#-*- coding: utf-8 -*-

from rest_framework import viewsets
from rest_framework.decorators import api_view
from .serializer import MeetingSerializer, UserSerializer, SubImageSerializer, StatisticsSerializer
from .models import Meeting, User, SubImage, UniversityAuthenticationLog, Statistics
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from random import randint
from rest_framework.response import Response
import datetime
import json

from rest_framework.response import Response
from rest_framework import status


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
            email = request.POST['email']
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

            html = "<div> 안녕하세요 LinkU입니다. <br> 다음 아래 번호를 입력 시간내에 입력해주세요. <br><br>"\
                   + str(auth_number) \
                   +"<br><br> LinkU 드림 </div>"
            msg = MIMEText(html, 'html')
            body.attach(msg)

            server.sendmail(from_addr=from_addr,
                            to_addrs=[to_addr],  # list, str 둘 다 가능
                            msg=body.as_string())

            server.quit()

            UniversityAuthenticationLog.objects.create(email=email
                                               ,auth_number=auth_number
                                               ,sent_to_user_time=datetime.datetime.now()
                                               ,auth_number_expiration_time=datetime.datetime.now() + datetime.timedelta(minutes=2))

            return Response({"message": "Success"})


@api_view(['POST'])
def check_university_verification_auth_number(request):
    if request.method == 'POST':
        auth_number = int(request.POST['auth_number'])
        email = request.POST['email']

        logs = UniversityAuthenticationLog.objects.filter(email=email).order_by('-sent_to_user_time')

        if len(logs) == 0:
            return Response({"message": "No such email"})

        latest_log = logs[0]

        if latest_log.auth_number_expiration_time < datetime.datetime.now():
            return Response({"message": "Time Out"})

        else:

            if latest_log.auth_number == auth_number:
                latest_log.is_authenticated = True
                latest_log.save()
                return Response({"message": "Success"})

            else:
                return Response({"message": "Wrong Auth Number"})
