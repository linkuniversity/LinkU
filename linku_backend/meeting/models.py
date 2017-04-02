from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

SAVED_MEETING_DEFAULT_IMAGE_NAME = 'meeting_default_image.jpg'


class User(AbstractUser):
    gender = models.CharField(max_length=1)
    nickname = models.CharField(max_length=20)
    profile_image_path = models.ImageField(blank=True)
    phone_number = models.CharField(blank=True, max_length=11)
    authenticated_university_email = models.EmailField(unique=True, null=False, max_length=254)


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
    appliers = models.ManyToManyField(settings.AUTH_USER_MODEL)


class SubImage(models.Model):
    path = models.ImageField(default=SAVED_MEETING_DEFAULT_IMAGE_NAME)
    meeting = models.ForeignKey('Meeting', related_name='sub_images', on_delete=models.CASCADE, blank=True)
