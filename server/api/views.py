# api/views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Module, Lecturer, Room, Activity
from .serializers import (
    ModuleSerializer, LecturerSerializer, 
    RoomSerializer, ActivitySerializer
)

class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer

class LecturerViewSet(viewsets.ModelViewSet):
    queryset = Lecturer.objects.all()
    serializer_class = LecturerSerializer

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    @action(detail=False, methods=['post'])
    def solve(self, request):
        """
        Example: a dummy solver endpoint. 
        Integrate real scheduling logic or Conjure AAS here.
        """
        # The request data might include the entire "userInfo" or partial data
        user_input = request.data

        # Fake solver result
        result = {
            "status": "ok",
            "solution": [
                {
                    "assignment": {
                        "1": {
                            "lecturer": "Dr. Smith",
                            "day": 1,
                            "hour": 9,
                            "room": "Room-101",
                        }
                    }
                }
            ]
        }
        return Response(result, status=status.HTTP_200_OK)
