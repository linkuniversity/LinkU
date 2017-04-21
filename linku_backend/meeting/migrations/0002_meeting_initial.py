from __future__ import unicode_literals
from django.db import migrations, models
import datetime


def forwards_func(apps, schema_editor):
    Meeting = apps.get_model("meeting", "Meeting")
    StatusByDay = apps.get_model("meeting", "StatusByDay")

    meeting = Meeting.objects.create(title="test title", maker_name="test meeting name", price=3500, place="혜화역 4번 출구",
                                     meeting_specific_info="대학생이니까 대학로!\n젊음과 문화, 자유를 만끽할 수 있는 대학로에서 모임 시작합니다\n가까운 장소들을 엮어서 피로는 덜하게 맜있는 것도 골라먹고 즐겁게 게임도 하면서\n하루쯤은 시험과 과제로 쌓인 스트레스를 풀어봐요")

    StatusByDay.objects.create(start_time=datetime.date(2017, 4, 28),
                               num_of_joined_members=0,
                               max_num_of_members=6,
                               meeting=meeting),

    StatusByDay.objects.create(start_time=datetime.date(2017, 4, 29),
                               num_of_joined_members=0,
                               max_num_of_members=6,
                               meeting=meeting)

    StatusByDay.objects.create(start_time=datetime.date(2017, 4, 30),
                               num_of_joined_members=0,
                               max_num_of_members=6,
                               meeting=meeting)


def reverse_func(apps, schema_editor):
    Meeting = apps.get_model("moim", "Meeting")
    db_alias = schema_editor.connection.alias


class Migration(migrations.Migration):
    dependencies = [
        ('meeting', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(forwards_func, reverse_func),
    ]
