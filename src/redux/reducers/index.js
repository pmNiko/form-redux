/*  Para crear el store siempre se hace a través 
    de reducers, nunca a través de acciones. */
import { combineReducers } from "redux";
import counter from "./../reducers/counterReducer";
import users from "./usersReducer";

// aca se iran añadiendo todos los reducers
export default combineReducers({
  counter,
  users,
});
