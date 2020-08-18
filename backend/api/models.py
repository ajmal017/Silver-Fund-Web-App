from django.db import models
from django.utils import timezone


class Position(models.Model):
    asset_id = models.CharField(
        verbose_name="asset id", max_length=40, null=True, blank=True
    )
    ticker = models.CharField(
        verbose_name="ticker", max_length=40, null=True, blank=True
    )
    num_of_shares = models.IntegerField(
        verbose_name="num of shares", null=True, blank=True
    )
    asset_type = models.CharField(
        verbose_name="asset type", max_length=40, null=True, blank=True
    )
    price = models.FloatField(verbose_name="price", null=True, blank=True)
    position_value = models.FloatField(
        verbose_name="position value", null=True, blank=True
    )
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.ticker


class Trade(models.Model):
    trade_id = models.CharField(
        verbose_name="trade id", max_length=40, null=True, blank=True
    )
    asset_id = models.CharField(
        verbose_name="asset id", max_length=40, null=True, blank=True
    )
    trade_type = models.CharField(
        verbose_name="asset id", max_length=40, null=True, blank=True
    )
    num_of_shares = models.IntegerField(verbose_name="asset_id", null=True, blank=True)
    price = models.FloatField(verbose_name="price", null=True, blank=True)
    tot_price = models.FloatField(verbose_name="tot_price", null=True, blank=True)
    trade_status = models.CharField(verbose_name="status", max_length=40, null=True, blank=True)
    trade_time = models.CharField(verbose_name="date time", max_length=40, null=True, blank=True)

    def __str__(self):
        return self.trade_id


class MarketData(models.Model):
    asset_id = models.CharField(
        verbose_name="asset id", max_length=40, null=True, blank=True
    )
    date = models.DateTimeField(verbose_name="date", null=True, blank=True)
    open_price = models.FloatField(verbose_name="open price", null=True, blank=True)
    close_price = models.FloatField(verbose_name="close price", null=True, blank=True)
    intra_high = models.FloatField(verbose_name="intra high", null=True, blank=True)
    intra_low = models.FloatField(verbose_name="intra low", null=True, blank=True)
    dividend = models.FloatField(verbose_name="dividend", null=True, blank=True)
    adj_factor = models.FloatField(verbose_name="adj factor", null=True, blank=True)
    num_of_shares = models.IntegerField(verbose_name="asset id", null=True, blank=True)
    tot_value = models.FloatField(verbose_name="tot_value", null=True, blank=True)
    cap = models.FloatField(verbose_name="cao", null=True, blank=True)
    usd_shr = models.FloatField(verbose_name="usd shr", null=True, blank=True)


class ForeignExchange(models.Model):
    country_code = models.CharField(
        verbose_name="country code", max_length=40, null=True, blank=True
    )
    date = models.DateTimeField(verbose_name="date", null=True, blank=True)
    exchange_rate = models.FloatField(
        verbose_name="exchange rate", null=True, blank=True
    )
    thirty_day_rate = models.FloatField(
        verbose_name="thirty day rate", null=True, blank=True
    )
    ninety_day_rate = models.FloatField(
        verbose_name="ninety day rate", null=True, blank=True
    )
    one_eighty_day_rate = models.FloatField(
        verbose_name="one eighty day rate", null=True, blank=True
    )
    one_year_rate = models.FloatField(
        verbose_name="one year rate", null=True, blank=True
    )
    two_year_rate = models.FloatField(
        verbose_name="two year rate", null=True, blank=True
    )
    three_year_rate = models.FloatField(
        verbose_name="three year rate", null=True, blank=True
    )
    five_year_rate = models.FloatField(
        verbose_name="five year rate", null=True, blank=True
    )
    seven_year_rate = models.FloatField(
        verbose_name="seven year rate", null=True, blank=True
    )
    ten_year_rate = models.FloatField(
        verbose_name="ten year rate", null=True, blank=True
    )
    twenty_year_rate = models.FloatField(
        verbose_name="twenty year rate", null=True, blank=True
    )
    thirty_year_rate = models.FloatField(
        verbose_name="thirty year rate", null=True, blank=True
    )


class Asset(models.Model):
    asset_id = models.CharField(
        verbose_name="asset id", max_length=40, null=True, blank=True
    )
    ticker = models.CharField(
        verbose_name="ticker", max_length=40, null=True, blank=True
    )
    conid = models.CharField(verbose_name="conid", max_length=40, null=True, blank=True)
    cusip = models.CharField(verbose_name="cusip", max_length=40, null=True, blank=True)
    valid_date = models.DateField(default=timezone.now)
    industry_code = models.CharField(
        verbose_name="industry code", max_length=40, null=True, blank=True
    )
    country_code = models.CharField(
        verbose_name="country code", max_length=40, null=True, blank=True
    )
    prim_exch = models.CharField(
        verbose_name="prim exch", max_length=40, null=True, blank=True
    )
    currency = models.CharField(
        verbose_name="currency", max_length=40, null=True, blank=True
    )
    flag = models.CharField(verbose_name="flag", max_length=40, null=True, blank=True)

