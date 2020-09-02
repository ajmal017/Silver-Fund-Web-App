/* URL for AWS Backend -- for all api calls */
export const apiBackendUrl = "http://54.184.215.7:8000/";

export const positionsTableCols = [
  {
    Header: "Asset ID",
    accessor: "asset_id",
  },
  {
    Header: "Ticker",
    accessor: "ticker",
  },
  {
    Header: "# of Shares",
    accessor: "num_of_shares",
  },
  {
    Header: "Type",
    accessor: "asset_type",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Value",
    accessor: "position_value",
  },
  {
    Header: "Date",
    accessor: "date",
  },
];

export const tradeHistoryTableCols = [
  {
    Header: "Trade ID",
    accessor: "trade_id",
  },
  {
    Header: "Asset ID",
    accessor: "asset_id",
  },
  {
    Header: "Type",
    accessor: "trade_type",
  },
  {
    Header: "# of Shares",
    accessor: "num_of_shares",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Total Price",
    accessor: "tot_price",
  },
  {
    Header: "Status",
    accessor: "trade_status",
  },
  {
    Header: "Trade Time",
    accessor: "trade_time",
  },
];
