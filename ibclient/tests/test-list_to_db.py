import mysql.connector

mydb = mysql.connector.connect(host="localhost", user="root", passwd="root", db="ib_db")

mycursor = mydb.cursor(dictionary=True)

""" CREATES DATABASE """
# mycursor.execute("CREATE DATABASE `ib_db`")

""" CREATES TABLE """
# mycursor.execute(
#     "CREATE TABLE `ib_db` (acctId VARCHAR(9), conid VARCHAR(15), secType VARCHAR(5), cOID VARCHAR(5), parentId VARCHAR(5), orderType VARCHAR(5), listingExchange VARCHAR(10), outsideRTH BIT, price INT, side VARCHAR(4), ticker VARCHAR(10), tif VARCHAR(10), referrer VARCHAR(40), quantity INT, useAdaptive BIT)"
# )

""" TAKES ORDER AND ADDS IT TO TABLE """
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

""" TRY TO DIRECTLY ADD PYTHON DICT TO DB """
# myDict = {
#     "acctId": "DU2206403",
#     "conid": 45157951,
#     "secType": "STK",
#     "cOID": "2",
#     "parentId": "2",
#     "orderType": "LMT",
#     "listingExchange": "DUMB",
#     "outsideRTH": True,
#     "price": 309,
#     "side": "SELL",
#     "ticker": "LULU",
#     "tif": "DAY",
#     "referrer": "QuickTrade",
#     "quantity": 100,
#     "useAdaptive": True,
# }

# table_name = "ib_db"
# placeholder = ", ".join(["%s"] * len(myDict))
# stmt = "insert into `{table}` ({columns}) values ({values});".format(
#     table=table_name, columns=",".join(myDict.keys()), values=placeholder
# )
# mycursor.execute(stmt, list(myDict.values()))

# columns = ", ".join("`" + str(x).replace("/", "_") + "`" for x in myDict.keys())
# values = ", ".join("'" + str(x).replace("/", "_") + "'" for x in myDict.values())
# sql = "INSERT INTO %s ( %s ) VALUES ( %s );" % ("ib_db", columns, values)
# # mycursor.executemany(sql, myDict.values())
# print(sql)

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
