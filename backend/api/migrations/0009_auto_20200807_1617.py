# Generated by Django 3.0.8 on 2020-08-07 16:17

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_position_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='position',
            name='date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
