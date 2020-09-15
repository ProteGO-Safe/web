import { combineReducers } from 'redux';

import app from './app';
import triage from './triage';
import user from './user';
import riskTest from './riskTest';
import daily from './daily';
import nativeData from './nativeData';
import { APP_STATE_CLEARED } from '../types/app';

const reducers = combineReducers({
  app,
  triage,
  user,
  riskTest,
  daily,
  nativeData
});

const rootReducer = (state, action) => {
  if (action.type === APP_STATE_CLEARED) {
    window.localStorage.clear();
    return reducers(undefined, action);
  }

  return reducers(state, action);
};

export default rootReducer;
