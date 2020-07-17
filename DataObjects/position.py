import json


class Position:
    def __init(
        self,
        acctId="",
        conid=0,
        contractDesc="",
        assetClass="",
        position=0,
        mktPrice=0,
        mktValue=0,
        currency="",
        avgCost=0,
        avgPrice=0,
        realizedPnl=0,
        unrealizedPnl=0,
        exchs="",
        expiry="",
        putOrCall="",
        multiplier=0,
        strike=0,
        exerciseStyle="",
        undConid=0,
        model="",
    ):

        self.acctId = acctId
        self.conid = conid
        self.contractDesc = contractDesc
        self.assetClass = assetClass
        self.position = position
        self.mktPrice = mktPrice
        self.mktValue = mktValue
        self.currency = currency
        self.avgCost = avgCost
        self.avgPrice = avgPrice
        self.realizedPnl = realizedPnl
        self.unrealizedPnl = unrealizedPnl
        self.exchs = exchs
        self.expiry = expiry
        self.putOrCall = putOrCall
        self.multiplier = multiplier
        self.strike = strike
        self.exerciseStyle = exerciseStyle
        self.undConid = undConid
        self.model = model

        self.order = {
            "acctId": self.acctId,
            "conid": int(self.conid),
            "contractDesc": self.contractDesc,
            "assetClass": self.assetClass,
            "position": self.position,
            "mktPrice": self.mktPrice,
            "mktValue": self.mktValue,
            "currency": self.currency,
            "avgCost": self.avgCost,
            "avgPrice": self.avgPrice,
            "realizedPnl": self.realizedPnl,
            "unrealizedPnl": self.unrealizedPnl,
            "exchs": self.exchs,
            "expiry": self.expiry,
            "putOrCall": self.putOrCall,
            "multiplier": self.multiplier,
            "strike": self.strike,
            "exerciseStyle": self.exerciseStyle,
            "undConid": self.undConid,
            "model": self.model,
        }

    def getPosition(self):
        return self.position()

    def show(self):
        print(json.dumps(self.position, indent=3))


#   Example Output:
# {
#     "acctId": "DU2206403",
#     "conid": 76792991,
#     "contractDesc": "TSLA",
#     "assetClass": "STK",
#     "position": 200,
#     "mktPrice": 1500,
#     "mktValue": 300000,
#     "currency": "USD",
#     "avgCost": 1409.5648525,
#     "avgPrice": 1409.5648525,
#     "realizedPnl": 0,
#     "unrealizedPnl": 18087.03,
#     "exchs": null,
#     "expiry": null,
#     "putOrCall": null,
#     "multiplier": null,
#     "strike": 0,
#     "exerciseStyle": null,
#     "undConid": 0,
#     "model": "string"
# }

# --------------------------------------------------------------- #
# Maybe add these later?  They're in the docs but weren't returned in JSON
# # "conExchMap": [],
# # "baseMktValue": 0,
# # "baseMktPrice": 0,
# # "baseAvgCost": 0,
# # "baseAvgPrice": 0,
# # "baseRealizedPnl": 0,
# # "baseUnrealizedPnl": 0,
# # "name": "string",
# # "lastTradingDay": "string",
# # "group": "string",
# # "sector": "string",
# # "sectorGroup": "string",
# # "ticker": "string",
# # "undComp": "string",
# # "undSym": "string",
# # "fullName": "string",
# # "pageSize": 0,
