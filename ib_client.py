class IB_Client():
    def __init__(self):
        Pass


    def get_positions_cur(self, account_num):
        """Returns all positions for the given account. Uses the /portfolio/{accountId}/positions/{pageId}
        endpoint.

        Parameters
        ----------
        account_num : int
            The account id associated with the given interactive brokers account

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

    def get_trades_unsettled(self, account_num):
        """Returns all trades we are still waiting on to settle (including number shares, mkt value, and date of trade).
            Uses the /iserver/account/orders endpoint.

        Parameters
        ----------
        account_num : int
            The account id associated with the given interactive brokers account

        Returns
        -------
        [trade]
            An array containing instances of the class trade

        """
        return None

    def get_cash_balance(self, account_num):
        """Returns present cash balance.

        Parameters
        ----------
        account_num : int
            The account id associated with the given interactive brokers account

        Returns
        -------
        double
            The current cash balance in USD

        """
        return None

    def get_margin_cash(self, account_num):
        """Returns current cash margin

        Parameters
        ----------
        account_num : int
            The account id associated with the given interactive brokers account

        Returns
        -------
        double
            cash margin in USD

        """
        return None

    def get_margin_portfolio(self, account_num):
        """Returns current portfolio margin

        Parameters
        ----------
        account_num : int
            The account id associated with the given interactive brokers account

        Returns
        -------
        double
            portfolio margin in USD

        """
        return None

    def get_short_callbacks(self, account_num):
        """Returns all shorts that are being called back today.

        Parameters
        ----------
        account_num : int
            The account id associated with the given interactive brokers account

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
