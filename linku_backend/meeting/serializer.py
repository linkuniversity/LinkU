from rest_framework import serializers
from .models import Meeting, User, SubImage, StatusByDay, Statistics


class StatisticsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Statistics
        fields = ('num_of_applier', 'created_meeting', 'new_meet_person')


class SubImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubImage
        fields = ('path', 'meeting')


class StatusByDaySerializer(serializers.ModelSerializer):
    appliers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    meeting_status = serializers.SerializerMethodField()

    class Meta:
        model = StatusByDay
        fields = ('appliers', 'meeting', 'meeting_status')

    def get_meeting_status(self, obj):
        WEEK_DAY = ['월', '화', '수', '목', '금', '토', '일']
        return str(obj.start_time.month) + '월 ' + \
               str(obj.start_time.day) + '일 ' + \
               WEEK_DAY[obj.start_time.today().weekday()] + \
               '요일 (' + str(obj.num_of_joined_members) + \
               '/' + str(obj.max_num_of_members) + ')명'


class MeetingSerializer(serializers.ModelSerializer):
    main_image = serializers.ImageField(use_url=True)
    sub_images = SubImageSerializer(many=True, read_only=True)
    status_by_days = StatusByDaySerializer(many=True, read_only=True)

    class Meta:
        model = Meeting
        fields = ('id', 'maker_name', 'title', 'main_image', 'sub_images', 'place', 'price',
                  'meeting_specific_info', 'restaurant_name', 'category', 'specific_link', 'status_by_days')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance

    class Meta:
        model = User
        fields = ('username', 'nickname', 'gender', 'password', 'phone_number', 'authenticated_university_email',
                  'is_participated')
