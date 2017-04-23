from django.contrib import admin
from meeting.models import User, StatusByDay

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    pass

class StatusByDayAdmin(admin.ModelAdmin):
    pass

admin.site.register(User, UserAdmin)
admin.site.register(StatusByDay, StatusByDayAdmin)
