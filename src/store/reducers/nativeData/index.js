import * as types from '../../types/nativeData';

const INITIAL_STATE = {
  riskLevel: undefined,
  servicesStatus: {},
  servicesStatusSetByNative: false,
  version: undefined,
  language: undefined,
  labTest: {
    subscription: undefined,
    pinUnsuccessfulAttempts: [],
    uploadPinResult: undefined
  },
  covidStats: {
    newCases: undefined,
    totalCases: undefined,
    newDeaths: undefined,
    totalDeaths: undefined,
    newRecovered: undefined,
    totalRecovered: undefined,
    updated: undefined
  },
  exposureAggregateStatistics: {
    lastRiskCheckTimestamp: undefined,
    todayKeysCount: undefined,
    last7daysKeysCount: undefined,
    totalKeysCount: undefined
  }
};

const setServicesStatusSuccess = (state, { servicesStatus = {} }, servicesStatusSetByNative) => {
  return {
    ...state,
    ...servicesStatus,
    servicesStatusSetByNative
  };
};

const resolvePinUnsuccessfulAttempts = (state, result) => {
  const { labTest } = state;
  if (!labTest) {
    return [];
  }
  const { pinUnsuccessfulAttempts = [] } = labTest;
  if (result === 1) {
    return [];
  }
  if (result === 2) {
    return [...pinUnsuccessfulAttempts, new Date().getTime()];
  }
  if (result === 3) {
    return [...pinUnsuccessfulAttempts];
  }
  return [...pinUnsuccessfulAttempts];
};

const nativeBridgeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NATIVE_DATA_FETCH_SERVICES_STATUS_SUCCESS:
      return setServicesStatusSuccess(state, action, false);
    case types.NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS:
      return setServicesStatusSuccess(state, action, true);
    case types.NATIVE_DATA_SET_SERVICE_STATUS_SOURCE_RESETED:
      return {
        ...state,
        servicesStatusSetByNative: false
      };
    case types.EN_STATUS_RECEIVED: {
      const {
        data: { riskLevel }
      } = action;
      return {
        ...state,
        riskLevel
      };
    }
    case types.NATIVE_DATA_FETCH_NATIVE_STATE: {
      const { appState } = action;
      return {
        ...state,
        ...appState
      };
    }
    case types.FETCH_VERSION_SUCCESS: {
      const {
        body: { appVersion }
      } = action;
      return {
        ...state,
        version: appVersion
      };
    }
    case types.FETCH_LANGUAGE: {
      const {
        body: { language }
      } = action;
      return {
        ...state,
        language: language.toLowerCase()
      };
    }
    case types.UPLOAD_LAB_TEST_PIN_FINISHED: {
      const {
        body: { result }
      } = action;
      const { labTest } = state;

      const pinUnsuccessfulAttempts = resolvePinUnsuccessfulAttempts(state, result);

      return {
        ...state,
        labTest: {
          ...labTest,
          uploadPinResult: result,
          pinUnsuccessfulAttempts
        }
      };
    }
    case types.RESET_UPLOAD_LAB_TEST_PIN_RESULT_SUCCESS: {
      const { labTest } = state;
      return {
        ...state,
        labTest: { ...labTest, uploadPinResult: undefined }
      };
    }
    case types.FETCH_LAB_TEST_SUBSCRIPTION: {
      const {
        body: { subscription }
      } = action;
      const { labTest } = state;
      return {
        ...state,
        labTest: { ...labTest, subscription }
      };
    }
    case types.FETCH_COVID_STATISTICS_SUCCESS: {
      const {
        body: { covidStats }
      } = action;
      return {
        ...state,
        covidStats
      };
    }
    case types.FETCH_EXPOSURE_AGGREGATE_STATISTICS: {
      const {
        body: { enStats }
      } = action;
      return {
        ...state,
        exposureAggregateStatistics: enStats
      };
    }

    default:
      return state;
  }
};

export default nativeBridgeReducer;
