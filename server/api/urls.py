# api/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ModuleViewSet, LecturerViewSet, 
    RoomViewSet, ActivityViewSet
)
from . import auth_views  # <--- import the file we created

router = DefaultRouter()
router.register(r'modules', ModuleViewSet, basename='module')
router.register(r'lecturers', LecturerViewSet, basename='lecturer')
router.register(r'rooms', RoomViewSet, basename='room')
router.register(r'activities', ActivityViewSet, basename='activity')

urlpatterns = [
    path('', include(router.urls)),

    # Auth endpoints
    path('auth/register/', auth_views.register_user, name='register'),
    path('auth/login/', auth_views.login_user, name='login'),
]
