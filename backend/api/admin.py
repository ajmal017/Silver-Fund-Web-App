from django.contrib import admin
from django.contrib.auth.models import User, Group
from api.models import Position

# Register your models here.
# admin.site.register(User)
# admin.site.register(Group)

admin.site.register(Position)
admin.site.unregister(Group)

