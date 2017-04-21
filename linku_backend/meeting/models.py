from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.conf import settings
from django.core.validators import RegexValidator
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

SAVED_MEETING_DEFAULT_IMAGE_NAME = 'meeting_default_image.jpg'


class User(AbstractUser):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    phone_regex = RegexValidator(regex='^\d{11}$', message='Phone length has to be 11 & Only number')

    username = models.EmailField(unique=True, null=False, max_length=254)
    nickname = models.CharField(unique=True, max_length=20)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=11, validators=[phone_regex])
    authenticated_university_email = models.EmailField(unique=True, null=False, max_length=254)
    profile_image_path = models.ImageField(blank=True)
    # participated_ids example: [0,1,3]
    participated_ids = models.CharField(max_length=200, default='[]')
    apply_alarm_indexes = models.CharField(max_length=200, default='[]')


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Statistics(models.Model):
    num_of_applier = models.IntegerField(default=0)
    created_meeting = models.IntegerField(default=0)
    new_meet_person = models.IntegerField(default=0)


class Meeting(models.Model):
    maker_name = models.CharField(max_length=20)
    title = models.CharField(max_length=30)
    main_image = models.ImageField(default=SAVED_MEETING_DEFAULT_IMAGE_NAME)
    place = models.CharField(max_length=30)
    price = models.IntegerField(blank=True)
    meeting_specific_info = models.TextField()
    restaurant_name = models.CharField(max_length=20)
    category = models.CharField(max_length=30)
    specific_link = models.CharField(max_length=30)


class StatusByDay(models.Model):
    start_time = models.DateTimeField()
    max_num_of_members = models.IntegerField(default=6)
    appliers = models.ManyToManyField(settings.AUTH_USER_MODEL)
    meeting = models.ForeignKey('Meeting', null=True, related_name="status_by_days", on_delete=models.CASCADE)


class SubImage(models.Model):
    path = models.ImageField(default=SAVED_MEETING_DEFAULT_IMAGE_NAME)
    meeting = models.ForeignKey('Meeting', related_name='sub_images', on_delete=models.CASCADE, blank=True)


class UniversityAuthenticationLog(models.Model):
    email = models.EmailField()
    auth_number = models.IntegerField()
    sent_to_user_time = models.DateTimeField()
    auth_number_expiration_time = models.DateTimeField()
    is_authenticated = models.BooleanField(default=False)

