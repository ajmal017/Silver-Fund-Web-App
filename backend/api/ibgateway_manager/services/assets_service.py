import json
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
        server = IBServer(self.ib_ipaddress)
        server.check_status()
        fields = [55, 7296, 7295, 86, 70, 71, 84, 31]

        submit_request(self.ib_ipaddress,'portal/iserver/accounts','GET')

        fields_joined = ",".join(str(n) for n in fields)
        since = 0 

        params = {
                'conids':conid,
                'since':since,
                'fields':fields_joined
            }

        req = submit_request(self.ib_ipaddress,'portal/iserver/marketdata/snapshot','GET', params)
        return(req)


