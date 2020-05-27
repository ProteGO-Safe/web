import * as types from '../types/diagnosis';

import { getDiagnosis as getPath } from '../../services/diagnosisLogic/diagnosisLogic.ts';

const diagnosisFetchRequested = ({ data }) => ({
  data,
  type: types.DIAGNOSIS_FETCH_REQUESTED
});

export const diagnosisFetchSuccess = ({ data }) => ({
  data,
  type: types.DIAGNOSIS_FETCH_SUCCESS
});

export function getDiagnosis(data) {
  return async dispatch => {
    dispatch(diagnosisFetchRequested({ data }));
    const result = getPath(data);
    dispatch(diagnosisFetchSuccess({ data: result }));
  };
}

export const clearDiagnosisRequested = () => ({
  type: types.DIAGNOSIS_CLEAR_REQUESTED
});

export function clearDiagnosis() {
  return async dispatch => {
    dispatch(clearDiagnosisRequested());
  };
}
