import requests
import json

body = 'https://localhost:5000/v1/portal'
auth = '/iserver/auth/status'
acounts = '/portfolio/accounts'
brok_accounts = '/iserver/accounts'
val = '/sso/validate'
order = '/iserver/account/DU2206403/order'
reply = '/iserver/reply/'

resp = requests.post(body + auth, verify = False)
resp = requests.get(body+val, verify = False)

resp = requests.get(body + acounts,  verify = False)
accountId = resp.json()[0]['accountId']

#Must make this call before you can make trades
resp = requests.get(body + brok_accounts, verify = False)

header1 = {'accept': 'application/json', 'Content-Type': 'application/json'}



trade_body = {
  "acctId": "DU2206403",
  "conid": 265598,
  "secType": "265598:STK",
  "cOID": str(hash('appl')),
  "parentId": str(hash('appl')),
  "orderType": "LMT",
  "listingExchange": "SMART",
  "outsideRTH": True,
  "price": 376.93,
  "side": "SELL",
  "ticker": "AAPL",
  "tif": "DAY",
  "referrer": "QuickTrade",
  "quantity": 10,
  "useAdaptive": True
}

make_trades = requests.post(body+order, headers=header1, json=trade_body, verify=False)
rep = make_trades.json()
print(rep)
repid = rep[0]['id']

posreply = {
  "confirmed": True
}

reply = requests.post(body+reply+str(repid), json = posreply, verify = False)
print(reply.json())
