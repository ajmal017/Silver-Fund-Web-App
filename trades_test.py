import requests
import json
from DataObjects.order import Order


order = Order("DU2206403", "265598", "STK", "LMT", "SMART", True, 383.5, "BUY", "AAPL", "DAY", "QuickTrade", 100, True)
order.show()


resp = requests.post("https://localhost:5000/v1/portal/iserver/account/DU2206403/order", verify = False, data= order.getOrder())
print(resp.json())
