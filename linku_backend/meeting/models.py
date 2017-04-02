from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.core.validators import RegexValidator

SAVED_MEETING_DEFAULT_IMAGE_NAME = 'meeting_default_image.jpg'


class User(AbstractUser):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    phone_regex = RegexValidator(regex='^\d{11}$', message='Phone length has to be 11 & Only number')

    username = models.EmailField(unique=True, null=False, max_length=254)
    nickname = models.CharField(max_length=20)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=11, validators=[phone_regex])
    authenticated_university_email = models.EmailField(unique=True, null=False, max_length=254)
    profile_image_path = models.ImageField(blank=True)


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
