import invoke from 'lodash.invoke';
import uniqueId from 'lodash.uniqueid';
import { DATA_TYPE } from './nativeBridge.constants';

const isAndroidWebView = () => !!window.NativeBridge;

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

window.bridgeDataResponse = receiveNativeResponse;

const getMatchedDevices = () => {
  try {
    return JSON.parse(invoke(window.NativeBridge, 'getMatchedDevices'));
  } catch (error) {
    console.error('Error while parsing native response', error);
  }
  return [];
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

const getNotification = async () => {
  try {
    const json = await callNativeFunction(
      'getBridgeData',
      DATA_TYPE.NOTIFICATION
    );

    if (json) {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error('Error while parsing native response', error);
  }
  return '';
};

const setDiagnosisTimestamp = async timestamp => {
  await callNativeFunction('setBridgeData', DATA_TYPE.FILLED_DIAGNOSIS, {
    timestamp
  });
};

export default {
  setDiagnosisTimestamp,
  getMatchedDevices,
  getNotification
};
