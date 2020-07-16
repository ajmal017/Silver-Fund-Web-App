import requests
import json
from DataObjects.order import Order


body = 'https://localhost:5000/v1/portal'
auth = '/iserver/auth/status'
acounts = '/portfolio/accounts'

resp = requests.post(body + auth,  verify = False)
resp = requests.post(body + acounts,  verify = False)
#ccountId = resp.json()[0]['accountId']

order = Order("DU2206403", "265598", "STK", "LMT", "SMART", True, 381.5, "SELL", "AAPL", "DAY", "QuickTrade", 10, False)
print(order.show())

#trade = requests.post("https://localhost:5000/v1/portal/iserver/auth/status", verify = False, data=  order.order)
#print(trade.json())


header1 = {'accept': 'application/json','Content-Type': 'application/json'}

resp2 = requests.post("https://localhost:5000/v1/portal/iserver/account/DU2206403/order", verify = False, data=  order.order, headers = header1,)
print(resp2.json())
print(resp2.status_code)
