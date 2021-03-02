import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useTable } from "react-table";

// import * as logsAction from "../actions/logs.action";
// export default (History) => () => {
export default function History() {
  // const listsReducer = useSelector(({ listsReducer }) => listsReducer);
  // const dispatch = useDispatch();

  const columns = [
    {
      header: "Status",
      width: "8%",
      key: 0,
    },
    {
      header: "Update date",
      width: "20%",
      key: 1,
    },
    {
      header: "Create date",
      width: "20%",
      key: 2,
    },
    {
      header: "Message",
      width: "26%",
      key: 3,
    },

    {
      header: "Old Message",
      width: "26%",
      key: 4,
    },
  ];

  const dateFormal = () => {
    let date = new Date();
    return date.toLocaleString();
  };

  return (
    <div className="area-box">
      <table className="w-100">
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th
                  key={column.key}
                  className="border border-dark bg-light p-2 font-weight-bold text-center"
                  style={{ width: column.width }}
                >
                  {column.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">555</td>
            <td className="">{dateFormal}</td>
            <td className="">555</td>
            <td className="">555</td>
            <td className="">555</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
