from __future__ import unicode_literals
from django.db import migrations, models
from django.contrib.auth.hashers import make_password

import datetime
import os


def forwards_func(apps, schema_editor):
    Meeting = apps.get_model("meeting", "Meeting")
    StatusByDay = apps.get_model("meeting", "StatusByDay")
    User = apps.get_model("meeting", "User")

    if os.environ['LINKU_SERVER_ENVIRONMENT'] != 'production':
        hashed_password = make_password("1234")
        User.objects.create(username="testman@email.com", password=hashed_password, name="test name", gender="M", phone_number="01099998888", authenticated_university_email="test@univ.ac.kr")

        current_meeting = Meeting.objects.create(title="test current meeting title", maker_name="test meeting name", price=3500, place="혜화역 4번 출구",
                                         meeting_specific_info="test meeting1 specific info", is_current=True)

        StatusByDay.objects.create(start_time=datetime.datetime(2017, 5, 5, 17, 0),
                                   num_of_joined_members=0,
                                   max_num_of_members=6,
                                   meeting=current_meeting),

        StatusByDay.objects.create(start_time=datetime.datetime(2017, 5, 6, 17, 0),
                                   num_of_joined_members=0,
                                   max_num_of_members=6,
                                   meeting=current_meeting)

        prearranged_meeting = Meeting.objects.create(title="test prearranged meeting title", maker_name="test meeting name", price=3500, place="강남역 4번 출구",
                                         meeting_specific_info="test meeting2 specific info", is_prearranged=True)

        StatusByDay.objects.create(start_time=datetime.datetime(2017, 5, 20, 19, 0),
                                   num_of_joined_members=0,
                                   max_num_of_members=6,
                                   meeting=prearranged_meeting),

        StatusByDay.objects.create(start_time=datetime.datetime(2017, 5, 21, 19, 0),
                                   num_of_joined_members=0,
                                   max_num_of_members=6,
                                   meeting=prearranged_meeting)

def reverse_func(apps, schema_editor):
    Meeting = apps.get_model("moim", "Meeting")
    db_alias = schema_editor.connection.alias


class Migration(migrations.Migration):
    dependencies = [
        ('meeting', '0009_meeting_current_and_prearrange'),
    ]

    operations = [
        migrations.RunPython(forwards_func, reverse_func),
    ]
