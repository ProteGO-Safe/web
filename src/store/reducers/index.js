import { combineReducers } from 'redux';

import app from './app';
import triage from './triage';
import user from './user';
import riskTest from './riskTest';
import daily from './daily';
import nativeData from './nativeData';
import restrictions from './restrictions';
import { APP_STATE_CLEARED } from '../types/app';

const reducers = combineReducers({
  app,
  daily,
  nativeData,
  restrictions,
  riskTest,
  triage,
  user
});

const rootReducer = (state, action) => {
  if (action.type === APP_STATE_CLEARED) {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};

export default rootReducer;
