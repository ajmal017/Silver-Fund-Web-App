import api.ibgateway_manager.calls.sf_calls as calls
from api.ibgateway_manager.services.assets_service import IBAssetsService
import json

#ipaddress = input("Enter IB ipaddress: ")
#server = calls.SFCalls("sam", "earnest", "localhost")


######Current Positions######
# pos_cur = server.get_positions_current()
# print(json.dumps(pos_cur, indent=4))

######Today's Trades######
# trades_today = server.get_trades_today()
# print(json.dumps(trades_today, indent=4))

######Unsettled Trades######
# trades_unsettled = server.get_trades_unsettled()
# print(json.dumps(trades_unsettled, indent=4))

# ######Cash Balance######
# cashbalance = server.get_cash_balance()
# print(json.dumps(cashbalance, indent=4))

######Market Data######
# servicer = IBAssetsService("localhost")
# mrktdata = servicer.get_market_data('107113386')
# print(mrktdata)

import requests

req = requests.get('https://localhost:5000/v1/portal/iserver/auth/status/', verify = False)
req = requests.get('https://localhost:5000/v1/portal/sso/validate/', verify = False)
req = requests.get('https://localhost:5000/v1/portal/iserver/accounts/', verify = False)

params = {
        'conids':'265598, 76792991',
        'since':0,
        'fields':'86,88,7280,7286'
    }

header1 = {'accept': 'application/json', 'Content-Type': 'application/json'}

req = requests.get('https://localhost:5000/v1/portal/iserver/marketdata/snapshot/', headers = header1, params = params, verify = False)
print(json.dumps(req.json(), indent=4))





