import sfserver.calls.sf_calls as calls
import json

cli = calls.SFCalls("sam", "earnest")

pos = cli.get_positions_current()
print(json.dumps(pos, indent=4))
