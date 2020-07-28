from ibclient.handlers.current_positions_handler import CurrentPositionsHandler
from ibclient.dataobjects.position import Position
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

        handler = CurrentPositionsHandler(account_id)
        positions_json = handler.get_positions()
        
        return positions_json

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
