import requests
import json

body = 'https://localhost:5000/v1/portal'
auth = '/iserver/auth/status'
acounts = '/portfolio/accounts'
val = '/sso/validate'
order = '/iserver/account/DU2206403/order'


resp = requests.post(body + auth, verify = False)
resp = requests.get(body+val, verify = False)


resp = requests.get(body + acounts,  verify = False)
accountId = resp.json()[0]['accountId']

header1 = {'accept': 'application/json', 'Content-Type': 'application/json'}

trade_body = {
    'acctId': 'DU2206403',
    'conid': 265598,
    'secType': '265598:STK',
    'cOID': 'apple_order',
    'parentId': 'apple_order',
    'orderType': 'LMT',
    'outsideRTH': 1,
    'price': 390,
    'side': 'BUY',
    'ticker': 'AAPL',
    'tif': 'DAY',
    'referrer': "QuickTrade",
    'fxQty': 0,
    'useAdaptive': 1,
    'isCurrencyConversion': 1
}

make_trades = requests.post(body+order, headers=header1, data=trade_body, verify=False)
rep = make_trades.json()
print(rep)
