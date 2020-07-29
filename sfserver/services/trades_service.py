import json
from datetime import datetime
from sfserver.handlers.request_handler import submit_request
from sfserver.ibserver.server import Server

class TradesService():

    def __init__(self, ib_ipaddress):
        self.ib_ipaddress = ib_ipaddress
        return None

    def get_current(self):

        server = Server(self.ib_ipaddress)
        server.check_status()

        #FIXME check how this datetime library works with time zones.
        date_today = datetime.today().strftime('%Y%m%d')
        resp = submit_request(self.ib_ipaddress, 'portal/iserver/account/trades', 'GET', None)
        trades =[]
        #Parse for only today's trades
        for trade in resp:
            if str(date_today) in trade['trade_time']:
                trades.append(trade)

        return trades

    def get_on(self, year, month, day):
        #creates DAO to pull data from database
        #checks for valid reply
        return None

    def get_unsettled(self):
        #calls trade handler to pull from API
        #checks for valid reply

        server = Server(self.ib_ipaddress)
        server.check_status()

        #FIXME sometimes this returns an empty list, but if you try again it ususally gives the correct data, we need to account for this
        resp = submit_request(self.ib_ipaddress, 'portal/iserver/account/orders', 'GET', None)

        orders = []
        #Get only unsettled or pending orders
        valid_status = ['PendingSubmit', 'PendingCancel', 'PreSubmitted', 'Submitted', 'Inactive']
        for order in resp['orders']:
            if order['status'] in valid_status:
                orders.append(order)
        
        return orders

    def update(self):
        #calls trade handler to pull from API
        #checks for valid reply
        #creates DAO to put data in the database
        #chechs operation was successful 
        return None
