import {
  ONBOARDING_FINISHED,
  START_SCREEN_SHOWED,
  UPLOAD_HISTORICAL_DATA_ENDED,
  UPLOAD_HISTORICAL_DATA_FINISHED,
  UPLOAD_HISTORICAL_DATA_REQUESTED
} from '../../types/app';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from './app.constants';

const INITIAL_STATE = {
  onboardingFinished: false,
  startScreenShowed: false,
  uploadHistoricalDataState: uploadState.EMPTY
};
const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONBOARDING_FINISHED:
      return {
        ...state,
        onboardingFinished: true
      };
    case START_SCREEN_SHOWED:
      return {
        ...state,
        startScreenShowed: true
      };
    case UPLOAD_HISTORICAL_DATA_REQUESTED:
      return {
        ...state,
        uploadHistoricalDataState: uploadState.REQUESTED
      };
    case UPLOAD_HISTORICAL_DATA_ENDED:
      return {
        ...state,
        uploadHistoricalDataState: uploadState.EMPTY
      };
    case UPLOAD_HISTORICAL_DATA_FINISHED:
      return (() => {
        const { result } = action;

        const uploadHistoricalDataState =
          result === 1 ? uploadState.SUCCESS : uploadState.FAILED;
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
