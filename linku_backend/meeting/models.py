from django.db import models


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
    image_paths = models.TextField(blank=True)
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
