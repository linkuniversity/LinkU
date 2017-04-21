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
    participant_num = serializers.SerializerMethodField()

    class Meta:
        model = StatusByDay
        fields = ('appliers', 'meeting', 'meeting_status', 'max_num_of_members', 'participant_num')

    def get_meeting_status(self, obj):
        WEEK_DAY = ['월', '화', '수', '목', '금', '토', '일']
        return str(obj.start_time.month) + '월 ' + \
               str(obj.start_time.day) + '일 ' + \
               WEEK_DAY[obj.start_time.weekday()] + '요일'

    def get_participant_num(self, obj):
        man_num = 0
        woman_num = 0
        for user in obj.appliers.all():
            if user.gender == 'M':
                man_num += 1
            else:
                woman_num += 1

        return {'man': man_num, 'woman': woman_num}


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
                  'participated_ids', 'apply_alarm_indexes')
