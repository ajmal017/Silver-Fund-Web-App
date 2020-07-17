class IB_Client():
    __init__(self):
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
