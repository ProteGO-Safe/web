import {
  NATIVE_DATA_FETCH_NOTIFICATION_SUCCESS,
  NATIVE_DATA_HIDE_NOTIFICATION_SUCCESS
} from '../../types/nativeData';

const INITIAL_STATE = {
  notification: undefined
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
    default:
      return state;
  }
};

export default nativeBridgeReducer;
