import { combineReducers } from "redux";

import diagnosis from "./diagnosis"
import triage from "./triage"

const reducers = combineReducers({
  diagnosis,
  triage
});

export default reducers;
