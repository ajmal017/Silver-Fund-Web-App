import sfserver.calls.sf_calls as calls
import json

server = calls.SFCalls("sam", "earnest")


######Current Positions######
# pos_cur = server.get_positions_current()
# print(json.dumps(pos_cur, indent=4))

######Today's Trades######
# trades_today = server.get_trades_today()
# print(json.dumps(trades_today, indent=4))

######Unsettled Trades######
# trades_unsettled = server.get_trades_unsettled()
# print(json.dumps(trades_unsettled, indent=4))

######Cash Balance######
# cashbalance = server.get_cash_balance()
# print(json.dumps(cashbalance, indent=4))



