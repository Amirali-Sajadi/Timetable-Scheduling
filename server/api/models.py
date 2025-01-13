# api/models.py
from django.db import models

class Module(models.Model):
    # e.g. "CS101"
    id = models.CharField(primary_key=True, max_length=100)
    # e.g. "Intro to Computer Science"
    name = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"{self.id} - {self.name}"

class Lecturer(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Room(models.Model):
    name = models.CharField(max_length=100, unique=True)
    capacity = models.PositiveIntegerField(default=30)

    def __str__(self):
        return f"{self.name} (capacity={self.capacity})"

class Activity(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name='activities')
    name = models.CharField(max_length=100)
    activity_per_week = models.PositiveIntegerField(default=1)
    # Store allowed/preferred timeslots as lists of day/hour combos
    allowed = models.JSONField(default=list, blank=True)
    preferred = models.JSONField(default=list, blank=True)

    def __str__(self):
        return f"Activity: {self.module.id}.{self.name}"
