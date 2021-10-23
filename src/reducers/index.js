import counterReducer from "./counter";
import logReducers from "./isLogged";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  counter: counterReducer,
  logged: logReducers,
});
export default rootReducers;
