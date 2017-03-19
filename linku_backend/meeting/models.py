import os

from django.conf import settings
from django.db import models

SAVED_MEETING_DEFAULT_IMAGE_NAME = settings.MEDIA_ROOT + 'meeting_default_image.jpg'


class User(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=40)
    gender = models.CharField(max_length=1)
    nickname = models.CharField(max_length=20)
    profile_image_path = models.ImageField(blank=True)
    phone_number = models.CharField(max_length=11)
    is_authenticated_university_student = models.BooleanField()


class Meeting(models.Model):
    maker_name = models.CharField(max_length=20)
    title = models.CharField(max_length=30)
    start_time = models.DateTimeField()
    main_image = models.ImageField(default=SAVED_MEETING_DEFAULT_IMAGE_NAME)
    place = models.CharField(max_length=30)
    price = models.IntegerField(blank=True)
    num_of_joined_members = models.IntegerField()
    max_num_of_members = models.IntegerField()
    meeting_specific_info = models.TextField()
    restaurant_name = models.CharField(max_length=20)
    category = models.CharField(max_length=30)
    specific_link = models.CharField(max_length=30)
    appliers = models.ManyToManyField(User)


class Comment(models.Model):
    user = models.ForeignKey(User)
    comment = models.TextField()
