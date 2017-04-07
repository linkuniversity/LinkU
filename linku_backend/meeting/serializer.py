from rest_framework import serializers
from .models import Meeting, User, SubImage


class SubImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubImage
        fields = ('path', 'meeting')


class MeetingSerializer(serializers.HyperlinkedModelSerializer):
    main_image = serializers.ImageField(use_url=True)
    sub_images = SubImageSerializer(many=True, read_only=True)
    appliers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Meeting
        fields = ('id', 'maker_name', 'title', 'start_time', 'main_image', 'sub_images', 'place', 'price', 'num_of_joined_members',
                  'max_num_of_members', 'meeting_specific_info', 'restaurant_name', 'category', 'specific_link', 'appliers')


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
        fields = ('username', 'nickname', 'gender', 'password', 'phone_number', 'authenticated_university_email')
