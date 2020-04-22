import {
  NATIVE_DATA_FETCH_NOTIFICATION_SUCCESS,
  NATIVE_DATA_HIDE_NOTIFICATION_SUCCESS,
  NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS
} from '../../types/nativeData';

const INITIAL_STATE = {
  notification: undefined,
  servicesStatus: {}
};

const setServicesStatusSuccess = (state, { servicesStatus = {} }) => {
  return {
    ...state,
    servicesStatus: {
      ...(state.servicesStatus || {}),
      ...servicesStatus
    }
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
    case NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS:
      return setServicesStatusSuccess(state, action);
    default:
      return state;
  }
};

export default nativeBridgeReducer;
