import json
from datetime import datetime
from api.ibgateway_manager.ibserver.server import IBServer
from api.ibgateway_manager.handlers.request_handler import submit_request

class IBAssetsService():

    def __init__(self, ib_ipaddress):
        self.ib_ipaddress = ib_ipaddress
        return None

    def get_assets(self, look_up_list):
        #loops through each asset in list
        #for each assets create a handler to grab that asset from IBKR
        #for each assset returned check valid reply
        #compile each returned asset into a list of assets and return the list
        return None

    def get_asset(self):
        return None

    def get_market_data(self, conid):
        date_today = datetime.today().strftime('%Y%m%d')
        server = IBServer(self.ib_ipaddress)
        server.check_status()

        submit_request(self.ib_ipaddress,'portal/iserver/accounts','GET')

        params = {
                'conids':conid,
                'since':0,
                'fields': '7295, 7296, 70, 71, 7286, 87, 7289'
            }

        req1 = submit_request(self.ib_ipaddress,'portal/iserver/marketdata/snapshot','GET', None)
        print(json.dumps(req1, indent=4))
        submit_request(self.ib_ipaddress,'portal/iserver/accounts','GET')
        req2 = submit_request(self.ib_ipaddress,'portal/iserver/marketdata/snapshot','GET', params)
        print(json.dumps(req2, indent=4))
        submit_request(self.ib_ipaddress,'portal/iserver/accounts','GET')
        req3 = submit_request(self.ib_ipaddress,'portal/iserver/marketdata/snapshot','GET', params)
        print(json.dumps(req3, indent=4))
        submit_request(self.ib_ipaddress,'portal/iserver/accounts','GET')
        req4 = submit_request(self.ib_ipaddress,'portal/iserver/marketdata/snapshot','GET', params)
        print(json.dumps(req4, indent=4))

        # data = {
        #     'asset_id': conid,
        #     'date_': date_today,
        #     'open_price': req[0]['7295'],
        #     'close_price': req[0]['7296'],
        #     'intra_high': req[0]['70'],
        #     'intra_low': req[0]['70'],
        #     'dividend': req[0]['7286'],
        #     'adj_factor': '',
        #     'num_of_shares': req[0]['87'],
        #     'tot_value': '',
        #     'cap': req[0]['7289'],
        #     'usd_shr': ''
        # }
        return(req1)


