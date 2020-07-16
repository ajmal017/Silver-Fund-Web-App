import requests
import json
from DataObjects.order import Order


#order = Order("DU2206403", "265598", "STK", "LMT", "SMART", True, 381.5, "SELL", "AAPL", "DAY", "QuickTrade", 10, False)
#print(order.show())

#resp = requests.post("https://localhost:5000/v1/portal/iserver/auth/status", verify = False, data=  order.order)
#print(resp.json())


#resp2 = requests.post("https://localhost:5000/v1/portal/iserver/account/DU2206403/order", verify = False, data=  order.order)
#print(resp2.json())

header1 = {'accept': 'application/json',
         'Content-Type': 'application/json'}
trade_body = {
  "acctId": "DU2206403",
  "conid": 265598,
  "secType": "STK",
  "cOID": "apple_order",
#optional  "parentId": "string",
  "orderType": "MKT",
#optional  "listingExchange": "string",
  "outsideRTH": "true",
# price is optinal if order is MKT, for LMT, this is required
# "price": 0,
  "side": "BUY",
  "ticker": "AAPL",
  "tif": "GTC",
  "referrer": "QuickTrade",
  "quantity": 5,
  "useAdaptive": "true"
}
make_trades = requests.post("https://localhost:5000/v1/portal/iserver/account/DU2206403/order", headers = header1, data=trade_body, verify=False)
rep = resp.json()
print(rep)
