import { combineReducers } from 'redux';

import diagnosis from './diagnosis';
import triage from './triage';
import user from './user';
import riskTest from './risktest';
import daily from './daily';

const reducers = combineReducers({
  diagnosis,
  triage,
  user,
  riskTest,
  daily
});

export default reducers;
