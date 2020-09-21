import * as types from '../types/triage';
import { getTriage } from '../../services/diagnosisLogic/triageLogic';
import { firstDiagnosisFinished } from './app';

export const triageFetchRequested = () => ({
  type: types.TRIAGE_FETCH_REQUESTED
});

export const triageFetchSuccess = ({ data }) => ({
  data,
  type: types.TRIAGE_FETCH_SUCCESS
});

export const fetchTriage = data => async dispatch => {
  dispatch(triageFetchRequested());
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
