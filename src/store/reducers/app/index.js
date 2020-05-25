import {
  EXPOSURE_ONBOARDING_FINISHED,
  ONBOARDING_FINISHED,
  START_SCREEN_SHOWED,
  UPLOAD_HISTORICAL_DATA_ENDED,
  UPLOAD_HISTORICAL_DATA_FINISHED,
  UPLOAD_HISTORICAL_DATA_REQUESTED
} from '../../types/app';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from './app.constants';

const INITIAL_STATE = {
  exposureOnboardingFinished: false,
  onboardingFinished: false,
  startScreenShowed: false,
  uploadHistoricalDataState: {
    status: uploadState.EMPTY,
    date: null,
    unsuccessfulAttempts: []
  }
};
const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONBOARDING_FINISHED:
      return {
        ...state,
        onboardingFinished: true
      };
    case EXPOSURE_ONBOARDING_FINISHED:
      return {
        ...state,
        exposureOnboardingFinished: true
      };

    case START_SCREEN_SHOWED:
      return {
        ...state,
        startScreenShowed: true
      };
    case UPLOAD_HISTORICAL_DATA_REQUESTED:
      return {
        ...state,
        uploadHistoricalDataState: {
          ...state.uploadHistoricalDataState,
          status: uploadState.REQUESTED,
          date: new Date().getTime()
        }
      };
    case UPLOAD_HISTORICAL_DATA_ENDED:
      return {
        ...state,
        uploadHistoricalDataState: {
          ...state.uploadHistoricalDataState,
          status: uploadState.EMPTY
        }
      };
    case UPLOAD_HISTORICAL_DATA_FINISHED:
      return (() => {
        const { result } = action;
        const unsuccessfulAttempts =
          state.uploadHistoricalDataState.unsuccessfulAttempts || [];
        const uploadHistoricalDataState =
          result === 1
            ? {
                status: uploadState.SUCCESS,
                unsuccessfulAttempts: []
              }
            : {
                status: uploadState.FAILED,
                unsuccessfulAttempts: unsuccessfulAttempts.concat(
                  new Date().getTime()
                )
              };
        return {
          ...state,
          uploadHistoricalDataState
        };
      })();
    default:
      return state;
  }
};

export default appReducer;
