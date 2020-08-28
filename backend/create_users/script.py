import csv, sys, os, django

project_dir = "C://Coding/SF/Silver-Fund-Web-App/backend"
sys.path.append(project_dir)
os.environ["DJANGO_SETTINGS_MODULE"] = "backend.settings"
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", __file__)
django.setup()

from django.contrib.auth import authenticate
from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()

# Add new users you want to a csv then reference it below.
# file = "C://Users/HP/Desktop/users-fall-2020.csv"
file = "users-fall-2020.csv"

data = csv.reader(open(file), delimiter=",")

# print("")
print("\nResults:\n")
# print("")
index = 0

for row in data:
    index = index + 1

    new_user = User()
    new_user.first_name = row[0]
    new_user.last_name = row[1]
    new_user.username = row[2]
    new_user.email = row[3]
    new_user.password = make_password(row[4])
    new_user.is_active = "0"
    new_user.save()

    print("Successfully created user (" + str(index) + ").")

print("\n" + str(index) + " users created.")
