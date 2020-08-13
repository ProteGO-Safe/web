import {
  DATA_FROM_NEWEST_VERSION_MARKED,
  EXPOSURE_ONBOARDING_FINISHED,
  FIRST_DIAGNOSIS_FINISHED,
  LANGUAGE_CHANGED,
  MIGRATION_FINISHED,
  ONBOARDING_FINISHED,
  START_SCREEN_SHOWED,
  UPLOAD_HISTORICAL_DATA_ENDED,
  UPLOAD_HISTORICAL_DATA_FINISHED,
  UPLOAD_HISTORICAL_DATA_REQUESTED
} from '../../types/app';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from './app.constants';

const INITIAL_STATE = {
  exposureOnboardingFinished: false,
  dataFromNewestVersionMarked: false,
  language: null,
  languageChangedByUser: false,
  migrations: [],
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
    case FIRST_DIAGNOSIS_FINISHED:
      return {
        ...state,
        firstDiagnosisFinished: true
      };
    case UPLOAD_HISTORICAL_DATA_FINISHED:
      return (() => {
        const { result } = action;
        const unsuccessfulAttempts =
          (state.uploadHistoricalDataState &&
            state.uploadHistoricalDataState.unsuccessfulAttempts) ||
          [];

        let uploadHistoricalDataState;

        uploadHistoricalDataState = {
          status: uploadState.FAILED,
          unsuccessfulAttempts: unsuccessfulAttempts.concat(
            new Date().getTime()
          )
        };

        if (result === 1) {
          uploadHistoricalDataState = {
            status: uploadState.SUCCESS,
            unsuccessfulAttempts: []
          };
        }

        if (result === 3) {
          uploadHistoricalDataState = {
            ...state.uploadHistoricalDataState,
            status: uploadState.EMPTY
          };
        }

        return {
          ...state,
          uploadHistoricalDataState
        };
      })();
    case DATA_FROM_NEWEST_VERSION_MARKED: {
      return {
        ...state,
        dataFromNewestVersionMarked: true
      };
    }
    case MIGRATION_FINISHED: {
      const { data } = action;
      return {
        ...state,
        migrations: [...(state.migrations || []), data]
      };
    }
    case LANGUAGE_CHANGED: {
      const { data } = action;
      return {
        ...state,
        language: data,
        languageChangedByUser: true
      };
    }
    default:
      return state;
  }
};

export default appReducer;
