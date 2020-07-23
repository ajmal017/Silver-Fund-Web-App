<<<<<<< HEAD
listclass IB_Client():
=======
class IB_Client:
>>>>>>> b5c7040c5455c5b7a5cd72a69d92c1007c01fb55
    def __init__(self, username, password):
        """Constructs the IB_Client class with a username and password. Takes care of starting up and authenticating the server.

        Parameters
        ----------
        username : string
            The username for the ib account you would like to do work on.
        password : string
            The password for the ib account you would like to do work on.
        """
        self.username = username
        self.password = password
        self.account_id = self.get_account_id()

        return None

    def _get_account_id(self):
        # Gets the account id

        return None

    def get_positions_current(self):
        """Returns all positions for the given account. Uses the /portfolio/{accountId}/positions/{pageId} endpoint.

        Returns
        -------
        position []
            An list containing instances of the class position.
        """

        # Call positions_service->get_current()

        return None

    def get_positions_on(self, year, month, day):
        """Returns all postions for a given date. Looks up data from the SilverFund database.

        Parameters
        ----------
        year : int
            Four digit representing the year. example: 2021.
        month : int
            Two digits representing the month. example: 03 for the month of March.
        day : int
            Two digits representing the day. example: 08 for the 8th.

        Returns
        -------
        position []
            An list containing instances of the class position.
        """

        #Call positionsservice->get_on()

        return None

    def get_trades_today(self):
        """Returns all trades made today.

        Returns
        -------
        trade[]
            An list containing instances of the class trade.
        """
        return None

    def get_trades_on(self, year, month, day):
        """Returns all trades for a given date. Looks up data from the SilverFund database.

        Parameters
        ----------
        year : int
            Four digit representing the year. example: 2021.
        month : int
            Two digits representing the month. example: 03 for the month of March.
        day : int
            Two digits representing the day. example: 08 for the 8th.

        Returns
        -------
        trade[]
            An list containing instances of the class trade.
        """
        return None

    def get_trades_unsettled(self):
        """Returns all trades we are still waiting on to settle (including number shares, mkt value, and date of trade).
        Uses the /iserver/account/orders endpoint.

        Returns
        -------
        trade[]
            An list containing instances of the class trade.

        """
        return None

    def get_cash_balance(self):
        """Returns present cash balance.

        Returns
        -------
        double
            The current cash balance in USD.
        """
        return None

    def get_margin_cash(self):
        """Returns current cash margin

        Returns
        -------
        double
            cash margin in USD.
        """
        return None

    def get_margin_portfolio(self):
        """Returns current portfolio margin.

        Returns
        -------
        double
            portfolio margin in USD.
        """
        return None

    def get_short_callbacks(self):
        """Returns all shorts that are being called back today.

        Returns
        -------
        position[]
            An list of all positions being called back today.
        """
        return None

<<<<<<< HEAD
    def get_short_intrest(self,look_up_list):
        """Returns shor intrests for the given assets.
=======
    def get_short_interest(self, look_up_array):
        """Returns short interests for the given assets.
>>>>>>> b5c7040c5455c5b7a5cd72a69d92c1007c01fb55

        Parameters
        ----------
        look_up_list : string[]
            An list of tickers, cusips, or conids?

        Returns
        -------
        dict[]
<<<<<<< HEAD
            An list of dicts that have key ticker and value intrest.
=======
            An array of dicts that have key ticker and value interest.
>>>>>>> b5c7040c5455c5b7a5cd72a69d92c1007c01fb55
        """
        return None

    def get_bids(self, look_up_list):
        """Looks up info for given assets and returns them in an list of assets.

        Parameters
        ----------
        look_up_list : string[]
            An list of tickers, cusips, or conids?

        Returns
        -------
        asset[]
            Returns a dict with key of ticker and value of bid.
        """
        return None

    def get_asks(self, look_up_list):
        """Looks up info for given assets and returns them in an list of assets.

        Parameters
        ----------
        look_up_list : string[]
            An list of tickers, cusips, or conids?

        Returns
        -------
        asset[]
            Returns a dict with key of ticker and value of ask.
        """
        return None

    def get_close_on(self, day, month, year, look_up_list):
        """Looks up info for given assets on given date and returns them in an list of assets.

        Parameters
        ----------
        year : int
            Four digit representing the year. example: 2021.
        month : int
            Two digits representing the month. example: 03 for the month of March.
        day : int
            Two digits representing the day. example: 08 for the 8th.
        look_up_list : string []
            An list of tickers, cusips, or conids?

        Returns
        -------
        asset[]
            Returns a dict with key of ticker and value of close price.
        """
        return None

    def get_assets(self, look_up_list):
        """Looks up info for given assets and returns them in an list of assets.

        Parameters
        ----------
        look_up_list : string[]
            An list of tickers, cusips, or conids?

        Returns
        -------
        asset[]
            Returns an list of requested assets.
        """
        return None

    def get_assets_on(self, day, month, year, look_up_list):
        """Looks up info for given assets on given date and returns them in an list of assets.

        Parameters
        ----------
        year : int
            Four digit representing the year. example: 2021.
        month : int
            Two digits representing the month. example: 03 for the month of March.
        day : int
            Two digits representing the day. example: 08 for the 8th.
        look_up_list : string []
            An list of tickers, cusips, or conids?

        Returns
        -------
        asset[]
            Returns an list of requested assets.
        """
        return None

    def update_positions(self):
        """Pulls current position data from Interactive Brokers and updates the positions table in the database.

        Returns
        -------
        bool
            True if successful and false if not.
        """
        return None

    def update_trades(self):
        """Pulls todays trade data from Interactive Brokers and updates the trades table in the database.

        Returns
        -------
        bool
            True if successful and false if not.
        """
        return None

    def update_marketdata(self):
        """Pulls todays market data from Interactive Brokers and updates the market data table in the database.

        Returns
        -------
        bool
            True if successful and false if not.
        """
        return None
