from __future__ import unicode_literals
from django.db import migrations


def forwards_func(apps, schema_editor):
    Status = apps.get_model("meeting", "Status")
    Status.objects.create(num_of_applier=154, created_meeting=24, new_meet_person=117)


def reverse_func(apps, schema_editor):
    Meeting = apps.get_model("moim", "Status")
    db_alias = schema_editor.connection.alias


class Migration(migrations.Migration):
    dependencies = [
        ('meeting', '0003_status'),
    ]

    operations = [
        migrations.RunPython(forwards_func, reverse_func),
    ]
