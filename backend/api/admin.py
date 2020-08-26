from django.contrib import admin
from django.contrib.auth.models import Group
from api.models import Position

admin.site.site_header = "Admin - Silver Fund"
admin.site.site_title = "Silver Fund"

admin.site.register(Position)
admin.site.unregister(Group)

