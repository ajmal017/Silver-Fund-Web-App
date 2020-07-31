import json
from api.ibgateway_manager.ibserver.server import IBServer
from api.ibgateway_manager.handlers.request_handler import submit_request

class IBAccountsService:
    
    def __init__(self, ib_ipaddress):
        self.ib_ipaddress = ib_ipaddress
    
    def get_cash_balance(self):
        
        server = IBServer(self.ib_ipaddress)
        server.check_status
        account_id = server.get_account_id()

        ledger = 'portal/portfolio/{accountId}/ledger'
        endpoint =  ledger.replace('{accountId}', account_id)
        resp = submit_request(self.ib_ipaddress, endpoint, 'GET', None)

        return resp['BASE']['cashbalance']



