import * as types from '../types/triage';

import RepositoryFactory from '../../repository/RepositoryFactory';

const TriageRepository = RepositoryFactory.get('triage');

export const triageFetchRequested = () => ({
  type: types.TRIAGE_FETCH_REQUESTED
});

export const triageFetchSuccess = ({ data }) => ({
  data,
  type: types.TRIAGE_FETCH_SUCCESS
});

export const triageFetchError = ({ message, status }) => ({
  message,
  status,
  type: types.TRIAGE_FETCH_ERROR
});

export function getTriage(data) {
  return dispatch => {
    dispatch(triageFetchRequested());
    TriageRepository.getTriage(data)
      .then(_data => dispatch(triageFetchSuccess(_data)))
      .catch(error => dispatch(triageFetchError(error)));
  };
}
