import json


class Order:
    def __init__(
        self,
        acctId="",
        conid=0,
        secType="",
        orderType="",
        listingEchange="",
        outsideRTH=True,
        price=0,
        side="",
        ticker="",
        tif="",
        referrer="",
        quantity=0,
        useAdaptive=True,
    ):

        self.acctId = acctId
        self.conid = conid
        self.secType = str(conid) + ":" + secType
        self.orderType = orderType
        self.listingExchange = listingEchange
        self.outsideRTH = outsideRTH
        self.price = price
        self.side = side
        self.ticker = ticker
        self.tif = tif
        self.referrer = referrer
        self.quantity = quantity
        self.useAdaptive = useAdaptive
        self.cOID = self.gen_cOID()
        self.parentId = self.cOID

        self.order = {
            "acctId": self.acctId,
            "conid": int(self.conid),
            "secType": self.secType,
            "cOID": str(self.cOID),
            "parentId": str(self.parentId),
            "orderType": self.orderType,
            "listingExchange": self.listingExchange,
            "outsideRTH": self.outsideRTH,
            "price": self.price,
            "side": self.side,
            "ticker": self.ticker,
            "tif": self.tif,
            "referrer": self.referrer,
            "quantity": self.quantity,
            "useAdaptive": self.useAdaptive,
        }

    def gen_cOID(self):
        return abs(hash(self))

    def get_order(self):
        return self.order()

    def show(self):
        print(json.dumps(self.order, indent=3))


#   Example Output:
#   FIXME - What was the URL? https://localhost:5000/v1/portal/iserver/account/DU2206403/order?
# {
#   "acctId": "DU2206403",
#   "conid": 45157951,
#   "secType": "STK",
#   "cOID": "2",
#   "parentId": "2",
#   "orderType": "LMT",
#   "listingExchange": "SMART",
#   "outsideRTH": true,
#   "price": 309,
#   "side": "SELL",
#   "ticker": "LULU",
#   "tif": "DAY",
#   "referrer": "QuickTrade",
#   "quantity": 100,
#   "useAdaptive": true
# }
