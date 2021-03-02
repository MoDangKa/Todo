import React from "react";
import { useTable } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import * as logsAction from "../actions/logs.action";

export default function History() {
  const logsReducer = useSelector(({ logsReducer }) => logsReducer);
  const dispatch = useDispatch();

  const data = logsReducer.logs;

  const columns = React.useMemo(
    () => [
      {
        Header: "Status",
        accessor: "status",
        width: "8%",
      },
      {
        Header: "Update date",
        accessor: "updateDate",
        width: "20%",
      },
      {
        Header: "Create date",
        accessor: "createDate",
        width: "20%",
      },
      {
        Header: "Message",
        accessor: "text",
        width: "26%",
      },
      {
        Header: "Old Message",
        accessor: "oText",
        width: "26%",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <div className="area-box">
        <table {...getTableProps()} className="w-100">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="border border-dark bg-light p-2 font-weight-bold text-center"
                    style={{ width: column.render("width") }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
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
      </div>
      <button
        className="btn btn-danger w-100"
        onClick={() => dispatch(logsAction.edit([]))}
      >
        Clear Logs
      </button>
    </div>
  );
}
