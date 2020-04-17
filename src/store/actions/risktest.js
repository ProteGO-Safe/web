import moment from 'moment';

import * as types from '../types/risktest';
import { clearDiagnosisRequested } from './diagnosis';
import { saveInfoAboutFilledDiagnosis } from './nativeData';

export const riskTestAddRequested = ({ data }) => ({
  data,
  timestamp: moment().unix(),
  type: types.RISK_TEST_ADD
});

export function addRiskTest(data) {
  return dispatch => {
    dispatch(riskTestAddRequested({ data }));
    dispatch(clearDiagnosisRequested({ data }));
    dispatch(saveInfoAboutFilledDiagnosis());
  };
}
