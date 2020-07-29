from sfserver.handlers.request_handler import submit_request
from sfserver.ibserver.server import Server
from sfserver.dataobjects.position import Position
import json

class PositionsService():

    def __init__(self):
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

        server = Server()
        server.check_status()

        #FIXME we'll need to make sure if we have more than 30 positions we call for each page
        positions = 'portal/portfolio/{accountId}/positions/0'
        endpoint =  positions.replace('{accountId}', account_id)
        resp = submit_request(endpoint, 'GET', None)
        return resp

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
