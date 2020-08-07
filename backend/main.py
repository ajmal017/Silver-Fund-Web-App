import api.ibgateway_manager.calls.sf_calls as calls
from api.ibgateway_manager.services.assets_service import IBAssetsService
import json
import logging
logging.basicConfig(filename='marketdata.log')
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

#####Market Data######
#servicer = IBAssetsService("localhost")
#mrktdata = servicer.get_market_data('107113386')
#print(json.dumps(mrktdata, indent=4))

# import requests
# import websockets
# import asyncio

# req = requests.get('https://localhost:5000/v1/api/iserver/auth/status/', verify = False)
# req = requests.get('https://localhost:5000/v1/api/sso/validate/', verify = False)
# req = requests.get('https://localhost:5000/v1/api/iserver/accounts/', verify = False)


# async def hello(websocket, path):
#     data = await websocket.recv()
#     print(f"<{data}")

#     req = 'smd+265598+{"fields":["7295","7296", "70", "71", "7286", "87", "7289"]}'
#     await websocket.send(req)
#     print(f"<{req}")

# start_server = websockets.serve(hello, "localhost", '5000')

# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()





# param0 = {
#         'conids':'0',
#         'since':3600,
#         'fields':''
#     }

# param1 = {
#         'conids':'265598',
#         'since':3600,
#         'fields':'84,85'
#     }

# param2 = {
#         'conids':'107113386',
#         'since':3600,
#         'fields':'70, 71'
#     }

# header1 = {'accept': 'application/json', 'Content-Type': 'application/json'}

# print('start')

# i = 1
# while i < 6:
#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = param1, verify = False)
#     print(json.dumps(req.json(), indent=4))
#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = param1, verify = False)
#     print(json.dumps(req.json(), indent=4))
#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = param1, verify = False)
#     print(json.dumps(req.json(), indent=4))

#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = param0, verify = False)
#     print(json.dumps(req.json(), indent=4))

#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = param2, verify = False)
#     print(json.dumps(req.json(), indent=4))
#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = param2, verify = False)
#     print(json.dumps(req.json(), indent=4))
#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = param2, verify = False)
#     print(json.dumps(req.json(), indent=4))

#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = param0, verify = False)
#     print(json.dumps(req.json(), indent=4))




# 
#     req = requests.get('https://localhost:5000/v1/api/iserver/accounts/', verify = False)
#     req = requests.get('https://localhost:5000/v1/api/iserver/marketdata/snapshot/', headers = header1, params = params, verify = False)
#     print(json.dumps(req.json(), indent=4))
#     logging.info(req.json())





