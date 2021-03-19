import * as types from '../../types/app';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from './app.constants';
import createUploadHistoricalDataState from './app.helpers';

const INITIAL_STATE = {
  applicationReseted: false,
  exposureOnboardingFinished: false,
  dataFromNewestVersionMarked: false,
  language: null,
  languageChangedByUser: false,
  migrations: [],
  onboardingFinished: false,
  startScreenShowed: false,
  uploadHistoricalDataState: {
    errorMessageVisible: false,
    date: null,
    status: uploadState.EMPTY,
    unsuccessfulAttempts: []
  },
  registrationFinished: false,
  warningInEuropeTerm: false,
  rating: {
    applicationLiked: undefined,
    toShowTimestamps: [], // {timestamp: '', showed : ''}
    showedTimestamps: [],
    showed: undefined
  },
  firstRunTime: undefined
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ONBOARDING_FINISHED:
      return {
        ...state,
        onboardingFinished: true
      };
    case types.EXPOSURE_ONBOARDING_FINISHED:
      return {
        ...state,
        exposureOnboardingFinished: true
      };

    case types.START_SCREEN_SHOWED:
      return {
        ...state,
        startScreenShowed: true
      };
    case types.UPLOAD_HISTORICAL_DATA_REQUESTED:
      return {
        ...state,
        uploadHistoricalDataState: {
          ...state.uploadHistoricalDataState,
          status: uploadState.REQUESTED,
          date: new Date().getTime()
        }
      };
    case types.UPLOAD_HISTORICAL_DATA_ENDED:
      return {
        ...state,
        uploadHistoricalDataState: {
          ...state.uploadHistoricalDataState,
          status: uploadState.EMPTY
        }
      };
    case types.FIRST_DIAGNOSIS_FINISHED:
      return {
        ...state,
        firstDiagnosisFinished: true
      };
    case types.UPLOAD_HISTORICAL_DATA_FINISHED:
      return (() => {
        const { result } = action;

        return {
          ...state,
          uploadHistoricalDataState: createUploadHistoricalDataState(result, state)
        };
      })();
    case types.DATA_FROM_NEWEST_VERSION_MARKED: {
      return {
        ...state,
        dataFromNewestVersionMarked: true
      };
    }
    case types.MIGRATION_FINISHED: {
      const { data } = action;
      return {
        ...state,
        migrations: [...(state.migrations || []), data]
      };
    }
    case types.LANGUAGE_CHANGED: {
      const { data } = action;
      return {
        ...state,
        language: data,
        languageChangedByUser: true
      };
    }
    case types.APP_STATE_CLEARED: {
      return {
        ...state,
        applicationReseted: true
      };
    }
    case types.ALL_DATA_CLEARED: {
      return {
        ...state,
        applicationReseted: false
      };
    }
    case types.UPLOAD_HISTORICAL_DATA_ERROR_MESSAGE_HIDDEN: {
      const { uploadHistoricalDataState } = state;
      return {
        ...state,
        uploadHistoricalDataState: {
          ...uploadHistoricalDataState,
          errorMessageVisible: false
        }
      };
    }
    case types.REGISTRATION_FINISHED: {
      return {
        ...state,
        registrationFinished: true
      };
    }
    case types.FONT_SCALE_FETCHED: {
      const {
        data: { fontScale }
      } = action;
      return {
        ...state,
        fontScale
      };
    }
    case types.WARNING_IN_EUROPE_TERM_TOGGLE: {
      return (() => {
        const prev = state.warningInEuropeTerm;

        return {
          ...state,
          warningInEuropeTerm: !prev
        };
      })();
    }
    case types.FIRST_RUN: {
      const {
        data: { timestamp }
      } = action;
      return {
        ...state,
        firstRunTime: timestamp
      };
    }
    case types.APPLICATION_RATED: {
      const { rating = {} } = state;
      const {
        data: { liked }
      } = action;
      return {
        ...state,
        rating: { ...rating, applicationLiked: liked }
      };
    }
    case types.SHOWING_RATE_APPLICATION_SET: {
      const { rating = {} } = state;
      const { toShowTimestamps = [] } = rating;
      const {
        data: { timestamp }
      } = action;
      return {
        ...state,
        rating: { ...rating, toShowTimestamps: [...toShowTimestamps, { timestamp, showed: false }] }
      };
    }
    case types.RATE_APPLICATION_SHOWED: {
      const { rating = {} } = state;
      const { showedTimestamps = [], toShowTimestamps = [] } = rating;
      const {
        data: { timestamp: showedTimestamp }
      } = action;

      return {
        ...state,
        rating: {
          ...rating,
          showed: true,
          showedTimestamps: [...showedTimestamps, showedTimestamp],
          toShowTimestamps: toShowTimestamps.map(({ timestamp }) => ({ timestamp, showed: true }))
        }
      };
    }
    default:
      return state;
  }
};

export default appReducer;
