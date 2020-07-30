from django.db import models

# Create your models here.

class Positions(models.Model):
    ticker = models.CharField(verbose_name="ticker", max_length=40, null=True, blank=True)
    value = models.FloatField(verbose_name="value", null=True, blank=True)


    def __str__(self):
        return self.ticker 