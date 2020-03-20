import { combineReducers } from 'redux';

import diagnosis from './diagnosis';
import triage from './triage';
import user from './user';
import questionnaires from './questionnaires';

const reducers = combineReducers({
  diagnosis,
  triage,
  user,
  questionnaires
});

export default reducers;
