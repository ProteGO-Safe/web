import moment from 'moment';

import * as types from '../types/riskTest';
import { saveInfoAboutFilledDiagnosis } from './nativeData';

export const riskTestAddRequested = ({ data }) => ({
  data,
  timestamp: moment().unix(),
  type: types.RISK_TEST_ADD
});

export const addRiskTest = data => dispatch => {
  dispatch(riskTestAddRequested({ data }));
  dispatch(saveInfoAboutFilledDiagnosis());
};

export const wholeRiskTestUpdated = data => ({
  data,
  type: types.WHOLE_RISK_TEST_UPDATED
});

export const updateWholeRiskTest = data => dispatch => {
  dispatch(wholeRiskTestUpdated(data));
};
