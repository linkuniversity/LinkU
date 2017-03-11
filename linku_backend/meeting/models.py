from django.db import models

# Create your models here.


class Meeting(models.Model):
    maker = models.CharField(max_length=30)

