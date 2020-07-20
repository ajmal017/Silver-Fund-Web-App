import mysql.connector

mydb = mysql.connector.connect(host="localhost", user="root", passwd="root", db="ib_db")

mycursor = mydb.cursor()

# mycursor.execute("CREATE DATABASE `ib_db`")

# mycursor.execute(
#     "CREATE TABLE `ib_db` (acctId VARCHAR(9), conid VARCHAR(15), secType VARCHAR(5), cOID VARCHAR(5), parentId VARCHAR(5), orderType VARCHAR(5), listingExchange VARCHAR(10), outsideRTH BIT, price INT, side VARCHAR(4), ticker VARCHAR(10), tif VARCHAR(10), referrer VARCHAR(40), quantity INT, useAdaptive BIT)"
# )

addOrder = """INSERT INTO `ib_db`
              (acctId, conid, secType, cOID, parentId, orderType, listingExchange, outsideRTH, price, side, ticker, tif, referrer, quantity, useAdaptive)
              VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

myOrder = (
    "DU2206403",
    45157951,
    "STK",
    "2",
    "2",
    "LMT",
    "SMART",
    1,
    309,
    "SELL",
    "LULU",
    "DAY",
    "QuickTrade",
    100,
    1,
)

mycursor.executemany(addOrder, {myOrder})
mydb.commit()

# {
#   "acctId": "DU2206403",
#   "conid": 45157951,
#   "secType": "STK",
#   "cOID": "2",
#   "parentId": "2",
#   "orderType": "LMT",
#   "listingExchange": "SMART",
#   "outsideRTH": true,
#   "price": 309,
#   "side": "SELL",
#   "ticker": "LULU",
#   "tif": "DAY",
#   "referrer": "QuickTrade",
#   "quantity": 100,
#   "useAdaptive": true
# }
