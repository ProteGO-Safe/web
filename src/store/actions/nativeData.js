import moment from 'moment';
import nativeBridge from '../../services/nativeBridge';
import * as types from '../types/nativeData';

export const fetchDevicesListSuccess = matchedDevices => ({
  matchedDevices,
  type: types.NATIVE_DATA_FETCH_DEVICES_LIST_SUCCESS
});

export function fetchDevicesList() {
  return dispatch => {
    const matchedDevices = nativeBridge.getMatchedDevices();
    dispatch(fetchDevicesListSuccess(matchedDevices));
  };
}

export function saveInfoAboutFilledDiagnosis() {
  const timestamp = moment().unix();

  return () => {
    nativeBridge.setDiagnosisTimestamp(timestamp);
  };
}
