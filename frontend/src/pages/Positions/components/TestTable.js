import React from "react";
import { useTable, useSortBy } from "react-table";
import Spinner from "react-bootstrap/Spinner";

import { addThousandsComma, makeMoneyFormat } from "../../../helpers";
import downArrow from "../../../images/down-arrow.png";
import upArrow from "../../../images/up-arrow.png";

export const columns = [
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

export default function TestTable(props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: props.apiData,
    },
    useSortBy
  );

  return (
    <div>
      {props.apiData && props.apiData.length > 0 ? (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <img
                            src={downArrow}
                            style={{ width: "20px", paddingLeft: "5px" }}
                          />
                        ) : (
                          <img
                            src={upArrow}
                            style={{ width: "20px", paddingLeft: "5px" }}
                          />
                        )
                      ) : null}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <Spinner
            animation="border"
            variant="dark"
            className="loading-spinner"
          />
        </div>
      )}
    </div>
  );
}
