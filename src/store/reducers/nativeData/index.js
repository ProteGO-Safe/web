import {
  NATIVE_DATA_SET_SERVICE_STATUS_SOURCE_RESETED,
  NATIVE_DATA_FETCH_NOTIFICATION_SUCCESS,
  NATIVE_DATA_FETCH_SERVICES_STATUS_SUCCESS,
  NATIVE_DATA_HIDE_NOTIFICATION_SUCCESS,
  NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS,
  NATIVE_DATA_FETCH_EXPOSURE_NOTIFICATION_STATISTICS_SUCCESS,
  NATIVE_DATA_FETCH_NATIVE_STATE,
  FETCH_VERSION_SUCCESS,
  FETCH_LANGUAGE
} from '../../types/nativeData';

const INITIAL_STATE = {
  riskLevel: undefined,
  notification: undefined,
  servicesStatus: {},
  servicesStatusSetByNative: false,
  version: undefined,
  language: undefined
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
    default:
      return state;
  }
};

export default nativeBridgeReducer;
