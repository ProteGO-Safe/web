import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from './app.constants';

const fetchCurrentUnsuccessfulAttempts = state =>
  (state.uploadHistoricalDataState &&
    state.uploadHistoricalDataState.unsuccessfulAttempts) ||
  [];

const createUnsuccessfulAttempts = state =>
  fetchCurrentUnsuccessfulAttempts(state).concat(new Date().getTime());

const createUploadHistoricalDataState = (result, state) => {
  switch (result) {
    case 1:
      return {
        status: uploadState.SUCCESS,
        unsuccessfulAttempts: []
      };
    case 2:
      return {
        status: uploadState.FAILED,
        unsuccessfulAttempts: createUnsuccessfulAttempts(state),
        errorMessageVisible: true
      };
    case 3:
      return {
        status: uploadState.EMPTY,
        unsuccessfulAttempts: fetchCurrentUnsuccessfulAttempts(state),
        errorMessageVisible: true
      };
    case 4:
      return {
        status: uploadState.FAILED,
        unsuccessfulAttempts: createUnsuccessfulAttempts(state),
        errorMessageVisible: true
      };
    case 5:
      return {
        status: uploadState.DENIED,
        unsuccessfulAttempts: fetchCurrentUnsuccessfulAttempts(state),
        errorMessageVisible: true
      };
    default:
      return { ...state.uploadHistoricalDataState };
  }
};

export default createUploadHistoricalDataState;
