import moment from 'moment';
import * as types from '../types/triage';
import { getTriage, getTriageDataByTriageLevel } from '../../services/diagnosisLogic/triageLogic';
import { firstDiagnosisFinished } from './app';

export const triageFetchSuccess = ({ data }) => ({
  data,
  type: types.TRIAGE_FETCH_SUCCESS
});

export const fetchTriage = data => async dispatch => {
  dispatch(firstDiagnosisFinished());
  const result = getTriage(data);
  dispatch(triageFetchSuccess({ data: result }));
  return result;
};

export const timeOfConfirmedCovidReseted = () => ({
  type: types.TIME_OF_CONFIRMED_COVID_RESETED
});

export const resetTimeOfConfirmedCovid = () => dispatch => {
  dispatch(timeOfConfirmedCovidReseted());
};

export const wholeTriageUpdated = data => ({
  data,
  type: types.WHOLE_TRIAGE_UPDATED
});

export const updateWholeTriage = data => dispatch => {
  dispatch(wholeTriageUpdated(data));
};

export const revokeTorStatusFinished = () => ({
  type: types.REVOKE_TOR_STATUS_FINISHED
});

export const revokeTorStatus = () => dispatch => {
  dispatch(revokeTorStatusFinished());
};

export const confirmManualCovidFinished = () => ({
  data: moment().unix(),
  type: types.CONFIRM_MANUAL_COVID_FINISHED
});

export const confirmManualCovid = () => dispatch => {
  dispatch(confirmManualCovidFinished());
};

export const revokeManualCovidFinished = () => ({
  type: types.REVOKE_MANUAL_COVID_FINISHED
});

export const revokeManualCovid = () => dispatch => {
  dispatch(revokeManualCovidFinished());
};

export const setLowTriageLevel = () => dispatch => {
  const data = getTriageDataByTriageLevel('no_risk');
  dispatch(triageFetchSuccess({ data }));
};
