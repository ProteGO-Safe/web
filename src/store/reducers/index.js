import { combineReducers } from "redux";

import diagnosis from "./diagnosis"
import triage from "./triage"
import user from "./user"

const reducers = combineReducers({
  diagnosis,
  triage,
  user
});

export default reducers;
