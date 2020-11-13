import {
  NATIVE_DATA_SET_SERVICE_STATUS_SOURCE_RESETED,
  NATIVE_DATA_FETCH_NOTIFICATION_SUCCESS,
  NATIVE_DATA_FETCH_SERVICES_STATUS_SUCCESS,
  NATIVE_DATA_HIDE_NOTIFICATION_SUCCESS,
  NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS,
  NATIVE_DATA_FETCH_EXPOSURE_NOTIFICATION_STATISTICS_SUCCESS,
  NATIVE_DATA_FETCH_NATIVE_STATE,
  FETCH_VERSION_SUCCESS,
  FETCH_LANGUAGE,
  UPLOAD_LAB_TEST_PIN_FINISHED,
  RESET_UPLOAD_LAB_TEST_PIN_RESULT_SUCCESS,
  FETCH_LAB_TEST_SUBSCRIPTION,
  REVOKE_EN_STATUS_FINISHED
} from '../../types/nativeData';

const INITIAL_STATE = {
  riskLevel: undefined,
  notification: undefined,
  servicesStatus: {},
  servicesStatusSetByNative: false,
  version: undefined,
  language: undefined,
  labTest: {
    subscription: undefined,
    pinUnsuccessfulAttempts: [],
    uploadPinResult: undefined
  }
};

const setServicesStatusSuccess = (
  state,
  { servicesStatus = {} },
  servicesStatusSetByNative
) => {
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
    case NATIVE_DATA_FETCH_NOTIFICATION_SUCCESS:
      return (() => {
        const {
          notification: { title, content, status }
        } = action;
        return {
          ...state,
          notification: {
            title,
            content,
            status
          }
        };
      })();
    case NATIVE_DATA_HIDE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notification: undefined
      };
    case NATIVE_DATA_FETCH_SERVICES_STATUS_SUCCESS:
      return setServicesStatusSuccess(state, action, false);
    case NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS:
      return setServicesStatusSuccess(state, action, true);
    case NATIVE_DATA_SET_SERVICE_STATUS_SOURCE_RESETED:
      return {
        ...state,
        servicesStatusSetByNative: false
      };
    case REVOKE_EN_STATUS_FINISHED: {
      const {
        body: { riskLevel }
      } = action;
      return {
        ...state,
        riskLevel
      };
    }
    case NATIVE_DATA_FETCH_EXPOSURE_NOTIFICATION_STATISTICS_SUCCESS: {
      const { riskLevel } = action;
      return {
        ...state,
        ...riskLevel
      };
    }
    case NATIVE_DATA_FETCH_NATIVE_STATE: {
      const { appState } = action;
      return {
        ...state,
        ...appState
      };
    }
    case FETCH_VERSION_SUCCESS: {
      const {
        body: { appVersion }
      } = action;
      return {
        ...state,
        version: appVersion
      };
    }
    case FETCH_LANGUAGE: {
      const {
        body: { language }
      } = action;
      return {
        ...state,
        language: language.toLowerCase()
      };
    }
    case UPLOAD_LAB_TEST_PIN_FINISHED: {
      const {
        body: { result }
      } = action;
      const { labTest } = state;

      const pinUnsuccessfulAttempts = resolvePinUnsuccessfulAttempts(
        state,
        result
      );

      return {
        ...state,
        labTest: {
          ...labTest,
          uploadPinResult: result,
          pinUnsuccessfulAttempts
        }
      };
    }
    case RESET_UPLOAD_LAB_TEST_PIN_RESULT_SUCCESS: {
      const { labTest } = state;
      return {
        ...state,
        labTest: { ...labTest, uploadPinResult: undefined }
      };
    }
    case FETCH_LAB_TEST_SUBSCRIPTION: {
      const {
        body: { subscription }
      } = action;
      const { labTest } = state;
      return {
        ...state,
        labTest: { ...labTest, subscription }
      };
    }
    default:
      return state;
  }
};

export default nativeBridgeReducer;
