import ibclient.client.ib_client as client




cli = client.IBClient("sam", "earnest")
cli.get_positions_current()