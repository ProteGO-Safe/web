import invoke from 'lodash.invoke';
import uniqueId from 'lodash.uniqueid';
import { cond, equals, always } from 'ramda';

import StoreRegistry from '../../store/storeRegistry';
import { NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS } from '../../store/types/nativeData';
import { DATA_TYPE } from './nativeBridge.constants';
import { isAndroidWebView } from '../../utills/native';
import { UPLOAD_HISTORICAL_DATA_FINISHED } from '../../store/types/app';

const nativeRequests = {};

const sendNativeRequest = (functionName, dataType, data) => {
  const requestId = uniqueId('request-');
  return new Promise((resolve, reject) => {
    nativeRequests[requestId] = { resolve, reject };
    invoke(window.webkit, `messageHandlers.${functionName}.postMessage`, {
      type: dataType,
      data,
      requestId
    });
  });
};

const receiveNativeResponse = (body, dataType, requestId) => {
  try {
    nativeRequests[requestId].resolve(body);
  } catch (error) {
    console.error('requestId', requestId, error);
    nativeRequests[requestId].reject(error);
  }
  delete nativeRequests[requestId];
};

const callNativeFunction = async (functionName, dataType, data) => {
  const args = [dataType];
  if (data) {
    args.push(JSON.stringify(data));
  }

  if (isAndroidWebView()) {
    return invoke(window.NativeBridge, functionName, ...args);
  }

  const result = await sendNativeRequest(functionName, ...args);
  return result;
};

const callGetBridgeData = async dataType => {
  try {
    const json = await callNativeFunction('getBridgeData', dataType);
    if (json) {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error('Error while parsing native response', error);
  }
  return '';
};

const getNativeServicesStatus = async () => {
  return callGetBridgeData(DATA_TYPE.NATIVE_SERVICES_STATUS);
};

const getNotification = async () => {
  return callGetBridgeData(DATA_TYPE.NOTIFICATION);
};

const setDiagnosisTimestamp = async timestamp => {
  await callNativeFunction('setBridgeData', DATA_TYPE.FILLED_DIAGNOSIS, {
    timestamp
  });
};

const setPin = async pin => {
  await callNativeFunction('setBridgeData', DATA_TYPE.HISTORICAL_DATA, {
    pin
  });
};

const setBluetoothModuleState = async data => {
  await callNativeFunction('setBridgeData', DATA_TYPE.BT_MODULE, data);
};

const handleServicesStatus = data => {
  const store = StoreRegistry.getStore();
  store.dispatch({
    servicesStatus: data,
    type: NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS
  });
};

const handleUploadHistoricalDataResponse = ({ result }) => {
  const store = StoreRegistry.getStore();
  store.dispatch({
    result,
    type: UPLOAD_HISTORICAL_DATA_FINISHED
  });
};

const callBridgeDataHandler = cond([
  [equals(DATA_TYPE.NATIVE_SERVICES_STATUS), always(handleServicesStatus)],
  [
    equals(DATA_TYPE.BATTERY_PERFORMANCE_PERMISSION),
    always(handleServicesStatus)
  ],
  [equals(DATA_TYPE.BT_PERMISSION), always(handleServicesStatus)],
  [equals(DATA_TYPE.LOCATION_PERMISSION), always(handleServicesStatus)],
  [equals(DATA_TYPE.NOTIFICATION_PERMISSION), always(handleServicesStatus)],
  [equals(DATA_TYPE.BT_MODULE), always(handleServicesStatus)],
  [
    equals(DATA_TYPE.HISTORICAL_DATA),
    always(handleUploadHistoricalDataResponse)
  ]
]);

const onBridgeData = (dataType, dataString) => {
  try {
    const data = JSON.parse(dataString);
    callBridgeDataHandler(dataType)(data);
  } catch (error) {
    console.error('Error while parsing native request', error);
  }
};

const showBatteryOptimizationPermission = async () => {
  await callNativeFunction(
    'setBridgeData',
    DATA_TYPE.BATTERY_PERFORMANCE_PERMISSION
  );
};

const showBtPermission = async () => {
  await callNativeFunction('setBridgeData', DATA_TYPE.BT_PERMISSION);
};

const showLocationPermission = async () => {
  await callNativeFunction('setBridgeData', DATA_TYPE.LOCATION_PERMISSION);
};

const showNotificationPermission = async () => {
  await callNativeFunction('setBridgeData', DATA_TYPE.NOTIFICATION_PERMISSION);
};

const clearBluetoothData = async data => {
  await callNativeFunction('setBridgeData', DATA_TYPE.CLEAR_BT_DATA, data);
};

window.onBridgeData = onBridgeData;
window.bridgeDataResponse = receiveNativeResponse;

export default {
  setDiagnosisTimestamp,
  setPin,
  setBluetoothModuleState,
  showBatteryOptimizationPermission,
  showBtPermission,
  showLocationPermission,
  showNotificationPermission,
  getNativeServicesStatus,
  getNotification,
  clearBluetoothData
};
