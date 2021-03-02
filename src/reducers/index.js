import { combineReducers } from "redux";
import listsReducer from "./lists.reducer";
import logsReducer from "./logs.reducer";

export default combineReducers({ listsReducer, logsReducer});
