import invoke from 'lodash.invoke';
import { filledDiagnosis, notification } from './dataType';

const getMatchedDevices = () => {
  try {
    return JSON.parse(invoke(window.NativeBridge, 'getMatchedDevices'));
  } catch (error) {
    console.error('Error while parsing native response', error);
  }
  return [];
};

const getNotification = () => {
  try {
    const json = invoke(window.NativeBridge, 'getBridgeData', notification);
    if (json) {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error('Error while parsing native response', error);
  }
  return '';
};

const setDiagnosisTimestamp = timestamp => {
  const json = JSON.stringify({ timestamp });
  invoke(window.NativeBridge, 'setBridgeData', filledDiagnosis, json);
};

export default {
  setDiagnosisTimestamp,
  getMatchedDevices,
  getNotification
};
