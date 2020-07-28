import json
import requests


class CurrentPositionsHandler:
    def __init__(self, account_id):

        # calls server->tickle()
        # checks server is still up
        # runs /portfolio/{accountId}/positions/{pageId}
        # may run multiple time to get all pages

        self.account_id = account_id

        return None

    def check_server_status(self):

        return None

    def get_positions(self):
        body = 'https://localhost:5000/v1/portal'
        positions = '/portfolio/{accountId}/positions/0'
        resp = requests.get(body + positions.replace('{accountId}', str(self.account_id)), verify = False)

        return resp.json()
