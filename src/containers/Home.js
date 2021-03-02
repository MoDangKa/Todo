import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./home/SearchBar";
import List from "./home/List";
import Control from "./home/Control";

import * as listsAction from "../actions/lists.action";

export default function Home() {
  const listsReducer = useSelector(({ listsReducer }) => listsReducer);
  const logsReducer = useSelector(({ logsReducer }) => logsReducer);
  const dispatch = useDispatch();

  const [lists, setLists] = useState(listsReducer.lists);

  const handleChange = (text) => {
    if (!text) {
      setLists(listsReducer.lists);
      return;
    }

    let result = [];

    lists.forEach((list) => {
      if (list.text.toUpperCase().indexOf(text.toUpperCase()) > -1) {
        result.push(list);
      }
    });

    setLists(result);
  };

  const update = (data) => {
    let lists = listsReducer.lists;
    lists.find((v) => v.createDate === data.createDate).text = data.text;

    let logs = logsReducer.logs;
    let date = new Date();
    logs.unshift({
      status: "Update",
      updateDate: date.toLocaleString(),
      createDate: data.createDate.toLocaleString(),
      text: data.text,
      oText: data.oText,
    });
  };

  const del = (data) => {
    let result = lists.filter((list) => list.createDate !== data.createDate);
    setLists(result);
    dispatch(listsAction.edit(result));

    let logs = logsReducer.logs;
    let date = new Date();
    logs.unshift({
      status: "Delete",
      updateDate: date.toLocaleString(),
      createDate: data.createDate.toLocaleString(),
      text: data.text,
      oText: "",
    });
  };

  const add = (text) => {
    let date = new Date();
    lists.push({ createDate: date, text: text });
    dispatch(listsAction.edit(lists));

    let logs = logsReducer.logs;
    logs.unshift({
      status: "Create",
      updateDate: date.toLocaleString(),
      createDate: date.toLocaleString(),
      text: text,
      oText: "",
    });
  };

  return (
    <div>
      <SearchBar onHandleChange={handleChange} />
      <div className="area-box">
        {lists &&
          lists.map((list) => (
            <List
              key={list.createDate}
              list={list}
              onDel={del}
              onUpdate={update}
            />
          ))}
      </div>
      <Control onAdd={add} />
    </div>
  );
}
