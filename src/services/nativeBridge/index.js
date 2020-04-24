import invoke from 'lodash.invoke';
import uniqueId from 'lodash.uniqueid';
import { cond, equals, always } from 'ramda';

import StoreRegistry from '../../store/storeRegistry';
import {
  NATIVE_DATA_SET_REJECTED_SERVICE_SUCCESS,
  NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS
} from '../../store/types/nativeData';
import { DATA_TYPE } from './nativeBridge.constants';
import { isAndroidWebView } from '../../utills/native';

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
    console.log(json);
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

const handleServicesStatus = data => {
  const store = StoreRegistry.getStore();
  store.dispatch({
    servicesStatus: data,
    type: NATIVE_DATA_SET_SERVICES_STATUS_SUCCESS
  });
};

const handleRejectedService = data => {
  const store = StoreRegistry.getStore();
  store.dispatch({
    rejectedService: data,
    type: NATIVE_DATA_SET_REJECTED_SERVICE_SUCCESS
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
  [equals(DATA_TYPE.REJECTED_SERVICE), always(handleRejectedService)]
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

window.onBridgeData = onBridgeData;
window.bridgeDataResponse = receiveNativeResponse;

export default {
  setDiagnosisTimestamp,
  showBatteryOptimizationPermission,
  showBtPermission,
  showLocationPermission,
  showNotificationPermission,
  getNativeServicesStatus,
  getNotification
};
