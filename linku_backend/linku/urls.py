"""linku URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from rest_framework import routers

from meeting import views
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register(r'meetings', views.MeetingViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'subimages', views.SubImageViewSet)
router.register(r'statistics', views.StatisticsViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^login/', obtain_auth_token),
    url(r'^participated-ids/', views.get_participated_ids, name='get_participated_ids'),
    url(r'^apply-alarm/', views.apply_alarm, name='apply_alarm'),
    url(r'^university-verification-email/', views.send_verification_email, name="send_verification_email"),
    url(r'^university-verification-number/', views.check_university_verification_auth_number,
        name="check_university_verification_auth_number")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
