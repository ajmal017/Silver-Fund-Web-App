class IB_Client():
    def __init__(self, username = None, password = None):
        """Constructs the IB_Clinet class with a username and password. Takes care of starting up and authenticating the server.

        Parameters
        ----------
        username : string
            The username for the ib account you would like to do work on.
        password : type
            The password for the ib account you would like to do work on.

        Returns
        -------
        type
            Description of returned object.

        """
        self.username = username
        self.password = password
        self.account_id = self.get_account_id()

        return None


    def _get_account_id(self):


        return None

    def get_positions_cur(self):
        """Returns all positions for the given account. Uses the /portfolio/{accountId}/positions/{pageId}
        endpoint.

        Returns
        -------
        [position]
            An array containing instances of the class position
        """

        return None

    def get_positions_on(self, year, month, day):
        """Returns all postions for a given date. Looks up data from the SilverFund database.

        Parameters
        ----------
        year : int
            Four diget representing the year. example: 2021.
        month : int
            Two digets representing the month. example: 03 for the month of March.
        day : int
            Two digets representing the day. example: 08 for the 8th.

        Returns
        -------
        [position]
            An array containing instances of the class position
        """
        return None

    def get_trades_on(self, year, month, day):
        """Returns all trades for a given date. Looks up data from the SilverFund database.

        Parameters
        ----------
        year : int
            Four diget representing the year. example: 2021.
        month : int
            Two digets representing the month. example: 03 for the month of March.
        day : int
            Two digets representing the day. example: 08 for the 8th.

        Returns
        -------
        [trade]
            An array containing instances of the class trade
        """
        return None

    def get_trades_unsettled(self):
        """Returns all trades we are still waiting on to settle (including number shares, mkt value, and date of trade).
            Uses the /iserver/account/orders endpoint.

        Returns
        -------
        [trade]
            An array containing instances of the class trade

        """
        return None

    def get_cash_balance(self):
        """Returns present cash balance.

        Returns
        -------
        double
            The current cash balance in USD

        """
        return None

    def get_margin_cash(self):
        """Returns current cash margin

        Returns
        -------
        double
            cash margin in USD

        """
        return None

    def get_margin_portfolio(self):
        """Returns current portfolio margin

        Returns
        -------
        double
            portfolio margin in USD

        """
        return None

    def get_short_callbacks(self):
        """Returns all shorts that are being called back today.

        Returns
        -------
        [position]
            all positions being called back today

        """
        return None


    def get_assets(self, look_up_array):
        """Looks up info for given assets and returns them in an array of assets.

        Parameters
        ----------
        look_up_array : string []
            An array of tickers, cusips, or conids?

        Returns
        -------
        asset[]
            Returns an array of requested assets.

        """
        return None

    def get_assets_on(self, day, month, year, look_up_array):
        """Looks up info for given assets on given date and returns them in an array of assets.

        Parameters
        ----------
        year : int
            Four diget representing the year. example: 2021.
        month : int
            Two digets representing the month. example: 03 for the month of March.
        day : int
            Two digets representing the day. example: 08 for the 8th.
        look_up_array : string []
            An array of tickers, cusips, or conids?

        Returns
        -------
        type
            Description of returned object.

        """
        return None
