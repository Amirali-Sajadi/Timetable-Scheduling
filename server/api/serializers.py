# api/serializers.py
from rest_framework import serializers
from .models import Module, Lecturer, Room, Activity

class ModuleSerializer(serializers.ModelSerializer):
    # We can optionally see all related activities as IDs or nested
    activities = serializers.PrimaryKeyRelatedField(
        many=True, 
        read_only=True
    )

    class Meta:
        model = Module
        fields = ['id', 'name', 'activities']

class LecturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecturer
        fields = ['id', 'name']

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name', 'capacity']

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = [
            'id',
            'module',
            'name',
            'activity_per_week',
            'allowed',
            'preferred',
        ]
