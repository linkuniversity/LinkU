from rest_framework import serializers
from .models import Meeting, User, SubImage, StatusByDay, Statistics, ActivityNeeds


class StatisticsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Statistics
        fields = ('num_of_applier', 'created_meeting', 'new_meet_person')


class ActivityNeedsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ActivityNeeds
        fields = ('contents',)


class SubImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubImage
        fields = ('path', 'meeting')


class StatusByDaySerializer(serializers.ModelSerializer):
    appliers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    participant_num = serializers.SerializerMethodField()

    class Meta:
        model = StatusByDay
        fields = ('appliers', 'meeting', 'max_num_of_members', 'participant_num', 'start_time')

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
    leader_image = serializers.ImageField(use_url=True)
    sub_images = SubImageSerializer(many=True, read_only=True)
    status_by_days = StatusByDaySerializer(many=True, read_only=True)

    class Meta:
        model = Meeting
        fields = ('id', 'title', 'main_image', 'sub_images', 'place', 'leader_talk', 'leader_image',
                  'status_by_days', 'is_current', 'is_prearranged')


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
        fields = ('username', 'name', 'gender', 'password', 'phone_number', 'authenticated_university_email',
                  'apply_alarm_indexes')
