from django.contrib import admin
from django.contrib.auth.models import Group, User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from api.models import Position


admin.site.unregister(Group)
admin.site.unregister(User)
admin.site.site_header = "Admin - Silver Fund"
admin.site.site_title = "Silver Fund"

# username - BYU Net ID
# password - Personal email username (everything before the '@') - temporary password until they change it
class UserAdmin(BaseUserAdmin):
    list_display = (
        "username",
        "first_name",
        "last_name",
        "email",
        "is_staff",
        "date_joined",
    )
    fieldsets = ()
    fields = (
        "first_name",
        "last_name",
        "username",
        "email",
        "password",
        "is_staff",
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "first_name",
                    "last_name",
                    "username",
                    "email",
                    "password1",
                    "password2",
                    "is_staff",
                ),
            },
        ),
    )


admin.site.register(Position)
admin.site.register(User, UserAdmin)

