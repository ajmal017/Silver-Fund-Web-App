from django.contrib import admin
from django.contrib.auth.models import Group
from api.models import Position

# Register your models here.

admin.site.register(Position)
admin.site.unregister(Group)

