import { combineReducers } from 'redux';

import activities from './activities';
import app from './app';
import daily from './daily';
import nativeData from './nativeData';
import navigation from './navigation';
import restrictions from './restrictions';
import riskTest from './riskTest';
import statistics from './statistics';
import triage from './triage';
import user from './user';
import { APP_STATE_CLEARED } from '../types/app';

const reducers = combineReducers({
  activities,
  app,
  daily,
  nativeData,
  navigation,
  restrictions,
  riskTest,
  statistics,
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
