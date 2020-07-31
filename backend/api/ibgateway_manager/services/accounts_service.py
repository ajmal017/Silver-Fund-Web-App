import json
from sfserver.ibserver.server import Server
from sfserver.handlers.request_handler import submit_request

class AccountsService:
    
    def __init__(self, account_id, ib_ipaddress):
        self.account_id = account_id
        self.ib_ipaddress = ib_ipaddress
    
    def get_cash_balance(self):
        
        server = Server(self.ib_ipaddress)
        server.check_status

        ledger = 'portal/portfolio/{accountId}/ledger'
        endpoint =  ledger.replace('{accountId}', self.account_id)
        resp = submit_request(self.ib_ipaddress, endpoint, 'GET', None)

        return resp['BASE']['cashbalance']



