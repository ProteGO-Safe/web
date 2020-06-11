import { combineReducers } from 'redux';

import app from './app';
import diagnosis from './diagnosis';
import triage from './triage';
import user from './user';
import riskTest from './risktest';
import daily from './daily';
import nativeData from './nativeData';
import { APP_STATE_CLEARED } from '../types/app';

const reducers = combineReducers({
  app,
  diagnosis,
  triage,
  user,
  riskTest,
  daily,
  nativeData
});

const rootReducer = (state, action) => {
  if (action.type === APP_STATE_CLEARED) {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};

export default rootReducer;
