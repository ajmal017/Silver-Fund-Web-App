import json


class Asset:
    def __init__(
        self,
        current_bid=0,
        current_ask=0,
        last_dividend_date="",
        last_dividend_value=0,
        num_of_floats=0,
    ):
        # FIXME - Make sure these are the right data types

        self.current_bid = current_bid
        self.current_ask = current_ask
        self.last_dividend_date = last_dividend_date
        self.last_dividend_value = last_dividend_value
        self.num_of_floats = num_of_floats

        self.asset = {
            "current_bid": self.current_bid,
            "current_ask": self.current_ask,
            "last_dividend_date": self.last_dividend_date,
            "last_dividend_value": self.last_dividend_value,
            "num_of_floats": self.num_of_floats,
        }

        def getAsset(self):
            return self.asset()

        def show(self):
            print(json.dumps(self.asset, indent=3))
