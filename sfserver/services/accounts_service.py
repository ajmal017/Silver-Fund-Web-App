import json
from sfserver.ibserver.server import Server
from sfserver.handlers.request_handler import submit_request

class AccountsService:
    
    def __init__(self, account_id):
        self.account_id = account_id
    
    def get_cash_balance(self):
        
        server = Server()
        server.check_status

        ledger = 'portal/portfolio/{accountId}/ledger'
        endpoint =  ledger.replace('{accountId}', self.account_id)
        resp = submit_request(endpoint, 'GET', None)

        return resp['BASE']['cashbalance']



