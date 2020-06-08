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

export function fetchTriage(data) {
  return dispatch => {
    dispatch(triageFetchRequested());
    dispatch(firstDiagnosisFinished());
    const result = getTriage(data);
    dispatch(triageFetchSuccess({ data: result }));
  };
}

export const timeOfConfirmedCovidReseted = () => ({
  type: types.TIME_OF_CONFIRMED_COVID_RESETED
});

export function resetTimeOfConfirmedCovid() {
  return dispatch => {
    dispatch(timeOfConfirmedCovidReseted());
  };
}
