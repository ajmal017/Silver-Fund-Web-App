import json


class Trade:
    def __init__(
        self,
        execution_id="",
        symbol="",
        supports_tax_opt="",
        side="",
        order_description="",
        trade_time="",
        trade_time_r=0,
        size=0,
        price="",
        order_ref="",
        exchange="",
        commission="",
        net_amount=0,
        account="",
        accountCode="",
        company_name="",
        contract_description_1="",
        sec_type="",
        listing_exchange="",
        conidex="",
        clearing_id="",
        clearing_name="",
    ):

        self.execution_id = execution_id
        self.symbol = symbol
        self.supports_tax_opt = supports_tax_opt
        self.side = side
        self.order_description = order_description
        self.trade_time = trade_time
        self.trade_time_r = trade_time_r
        self.size = size
        self.price = price
        self.order_ref = order_ref
        self.exchange = exchange
        self.commission = commission
        self.net_amount = net_amount
        self.account = account
        self.accountCode = accountCode
        self.company_name = company_name
        self.contract_description_1 = contract_description_1
        self.sec_type = sec_type
        self.listing_exchange = listing_exchange
        self.conidex = conidex
        self.clearing_id = clearing_id
        self.clearing_name = clearing_name

        self.trade = {
            "execution_id": self.execution_id,
            "symbol": self.symbol,
            "supports_tax_opt": self.supports_tax_opt,
            "side": self.side,
            "order_description": self.order_description,
            "trade_time": self.trade_time,
            "trade_time_r": self.trade_time_r,
            "size": self.size,
            "price": self.price,
            "order_ref": self.order_ref,
            "exchange": self.exchange,
            "commission": self.commission,
            "net_amount": self.net_amount,
            "account": self.account,
            "accountCode": self.accountCode,
            "company_name": self.company_name,
            "contract_description_1": self.contract_description_1,
            "sec_type": self.sec_type,
            "listing_exchange": self.listing_exchange,
            "conidex": self.conidex,
            "clearing_id": self.clearing_id,
            "clearing_name": self.clearing_name,
        }

    def get_trade(self):
        return self.trade()

    def show(self):
        print(json.dumps(self.trade, indent=3))


#   Example Output:
#   https://localhost:5000/v1/portal/iserver/account/trades
#   This JSON response has a few fields it returns that weren't in the documentation!
# {
#     "execution_id": "0000e0d5.5f18fd6b.01.01",
#     "symbol": "AAPL",
#     "supports_tax_opt": "1",
#     "side": "B",
#     "order_description": "Bot 10 @ 381.50 on ISLAND",
#     "trade_time": "20200713-19:54:54",
#     "trade_time_r": 1594670094000,
#     "size": 10,
#     "price": "381.50",
#     "order_ref": "274241800",
#     "exchange": "ISLAND",
#     "commission": "0.33",
#     "net_amount": 3815,
#     "account": "DU2206403",
#     "accountCode": "DU2206403",
#     "company_name": "APPLE INC",
#     "contract_description_1": "AAPL",
#     "sec_type": "STK",
#     "listing_exchange": "NASDAQ.NMS",
#     "conidex": "265598",
#     "clearing_id": "IB",
#     "clearing_name": "IB",
# }
