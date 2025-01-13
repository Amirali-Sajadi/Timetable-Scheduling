# api/admin.py
from django.contrib import admin
from .models import Module, Lecturer, Room, Activity

admin.site.register(Module)
admin.site.register(Lecturer)
admin.site.register(Room)
admin.site.register(Activity)
