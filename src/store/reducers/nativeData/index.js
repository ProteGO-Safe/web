import moment from 'moment';
import * as types from '../../types/nativeData';

const INITIAL_STATE = {
  riskLevel: undefined,
  servicesStatus: {},
  servicesStatusSetByNative: false,
  version: undefined,
  language: undefined,
  labTest: {
    subscription: undefined,
    subscriptionUpdated: undefined,
    pinUnsuccessfulAttempts: [],
  }
};

const setServicesStatusSuccess = (state, { servicesStatus: newServicesStatus = {} }, servicesStatusSetByNative) => {
  const { servicesStatus: currentServicesStatus = {} } = state;
  const { receivedServicesStatusMarker = 0 } = currentServicesStatus;
  const { servicesStatus } = newServicesStatus;
  return {
    ...state,
    servicesStatus: { ...servicesStatus, receivedServicesStatusMarker: receivedServicesStatusMarker + 1 },
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
          pinUnsuccessfulAttempts
        }
      };
    }
    case types.FETCH_LAB_TEST_SUBSCRIPTION: {
      const {
        body: { subscription }
      } = action;
      const { labTest } = state;
      return {
        ...state,
        labTest: { ...labTest, subscription, subscriptionUpdated: moment().unix() }
      };
    }
    default:
      return state;
  }
};

export default nativeBridgeReducer;
