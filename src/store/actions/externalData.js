import * as types from '../types/externalData';

import RepositoryFactory from '../../repository/RepositoryFactory';

const ExternalDataRepository = RepositoryFactory.get('externalData');

export const resetExternalData = () => dispatch => {
  dispatch({ type: types.EXTERNAL_DATA_RESETED });
};

export const clearError = () => dispatch => {
  dispatch({ type: types.CLEAR_ERROR });
};

export const fetchFaq = () => dispatch => {
  dispatch({ type: types.EXTERNAL_DATA_REQUESTED });

  ExternalDataRepository.getFaq().then(
    response => {
      dispatch({
        type: types.FETCH_FAQ_SUCCESS,
        payload: response.data
      });
      return response;
    },
    error => {
      dispatch({ type: types.EXTERNAL_DATA_FAILURE });
      return error;
    }
  );
};

export const fetchHospitals = () => dispatch => {
  dispatch({ type: types.EXTERNAL_DATA_REQUESTED });

  ExternalDataRepository.getHospitals().then(
    response => {
      dispatch({
        type: types.FETCH_HOSPITALS_SUCCESS,
        payload: response.data
      });
      return response;
    },
    error => {
      dispatch({ type: types.EXTERNAL_DATA_FAILURE });
      return error;
    }
  );
};

export const fetchAdvices = () => dispatch => {
  dispatch({ type: types.EXTERNAL_DATA_REQUESTED });

  ExternalDataRepository.getAdvices().then(
    response => {
      dispatch({
        type: types.FETCH_ADVICES_SUCCESS,
        payload: response.data
      });
      return response;
    },
    error => {
      dispatch({ type: types.EXTERNAL_DATA_FAILURE });
      return error;
    }
  );
};
