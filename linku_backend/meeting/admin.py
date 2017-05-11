from django.contrib import admin
from meeting.models import User, StatusByDay, Meeting

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    pass

class MeetingAdmin(admin.ModelAdmin):
    pass

class StatusByDayAdmin(admin.ModelAdmin):
    pass

admin.site.register(User, UserAdmin)
admin.site.register(StatusByDay, StatusByDayAdmin)
admin.site.register(Meeting, MeetingAdmin)