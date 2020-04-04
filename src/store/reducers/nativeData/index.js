import { NATIVE_DATA_FETCH_DEVICES_LIST_SUCCESS } from '../../types/nativeData';

const INITIAL_STATE = {
  matchedDevices: []
};

const fetchMatchedDevicesListSuccess = (state, action) => {
  return { ...state, matchedDevices: action.matchedDevices };
};

const nativeBridgeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NATIVE_DATA_FETCH_DEVICES_LIST_SUCCESS:
      return fetchMatchedDevicesListSuccess(state, action);
    default:
      return state;
  }
};

export default nativeBridgeReducer;
