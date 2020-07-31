from django.db import models

# Create your models here.

class Position(models.Model):
    asset_id = models.CharField(verbose_name="asset_id", max_length=40, null=True, blank=True)
    ticker = models.CharField(verbose_name="ticker", max_length=40, null=True, blank=True)
    num_of_shares = models.IntegerField(verbose_name="num_of_shares", null=True, blank=True)
    pos_type = models.CharField(verbose_name="pos_type", max_length=40, null=True, blank=True)
    price = models.FloatField(verbose_name="price", null=True, blank=True)
    position_value = models.FloatField(verbose_name="position_value", null=True, blank=True)

    def __str__(self):
        return self.ticker 

class Trade(models.Model):
    trade_id = models.CharField(verbose_name="trade_id", null=True, blank=True)
    asset_id = models.CharField(verbose_name="asset_id", max_length=40, null=True, blank=True)
    trade_type = models.CharField(verbose_name="asset_id", max_length=40, null=True, blank=True)
    num_of_shares = models.IntegerField(verbose_name="asset_id", max_length=40, null=True, blank=True)
    price = models.FloatField(verbose_name="price", null=True, blank=True)
    tot_price = models.FloatField(verbose_name="tot_price", null=True, blank=True)
    trade_time = models.CharField(verbose_name="trade_time", null=True, blank=True )

    def __str__(self):
        return self.trade_id

