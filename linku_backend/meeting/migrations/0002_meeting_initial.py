from __future__ import unicode_literals
from django.db import migrations, models
import datetime


def forwards_func(apps, schema_editor):
    Meeting = apps.get_model("meeting", "Meeting")
    StatusByDay = apps.get_model("meeting", "StatusByDay")

    meeting = Meeting.objects.create(title="test title", maker_name="test meeting name", price=6000)

    StatusByDay.objects.create(start_time=datetime.datetime.now(),
                               num_of_joined_members=1,
                               max_num_of_members=6,
                               meeting=meeting),
    StatusByDay.objects.create(start_time=datetime.datetime.now(),
                               num_of_joined_members=1,
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