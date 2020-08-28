import csv, sys, os, django


project_dir = "C://Coding/SF/Silver-Fund-Web-App/backend"
sys.path.append(project_dir)
os.environ["DJANGO_SETTINGS_MODULE"] = "backend.settings"
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", __file__)
import django

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
for row in data:
    Post = User()
    Post.first_name = row[0]
    Post.last_name = row[1]
    Post.username = row[2]
    Post.email = row[3]
    Post.password = make_password(row[4])
    Post.is_active = "0"
    Post.save()
    print("success")
