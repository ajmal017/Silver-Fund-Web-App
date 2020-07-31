from api.ibgateway_manager.handlers.request_handler import submit_request
from api.ibgateway_manager.ibserver.server import IBServer
import json

class IBPositionsService():

    def __init__(self, ib_ipaddress):
        self.ib_ipaddress = ib_ipaddress
        return None

    def get_current(self, account_id):
        """Returns all positions for the given account. Uses the /portfolio/{accountId}/positions/{pageId} endpoint.
        Parameters
        ----------
        account_id : int
            Id for the account through which the call will be made.
        Returns
        -------
        position []
            An list containing instances of the class position.
        """

        server = IBServer(self.ib_ipaddress)
        server.check_status()

        #FIXME we'll need to make sure if we have more than 30 positions we call for each page
        positions = 'portal/portfolio/{accountId}/positions/0'
        endpoint =  positions.replace('{accountId}', account_id)
        resp = submit_request(self.ib_ipaddress, endpoint, 'GET', None)
        cur_positions = []
        for position in resp:
            new_position = {
                "asset_id": position["conid"], 
                "ticker": position["ticker"],
                "num_of_shares": position["position"],
                "pos_type": position["assetClass"],
                "price": position["avgPrice"],
                "position_value": position["mktValue"]
                }
            cur_positions.append(new_position)
        return cur_positions

    def get_on(self, year, month, day):
        #creates DAO to pull data from database
        #checks if response is valid
        return None

    def update(self):
        #calls get_current
        #checks if response is valid
        #creates DAO
        #submits data though DAO and gets response
        return None
