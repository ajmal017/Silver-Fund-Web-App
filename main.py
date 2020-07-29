import sfserver.calls.sf_calls as calls




cli = calls.SFCalls("sam", "earnest")
print(cli.get_positions_current())