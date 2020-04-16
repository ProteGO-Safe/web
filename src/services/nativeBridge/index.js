import invoke from 'lodash.invoke';
import { filledDiagnosis } from './dataType';

const getMatchedDevices = () => {
  try {
    return JSON.parse(invoke(window.NativeBridge, 'getMatchedDevices'));
  } catch (error) {
    console.error('Error while parsing native response', error);
  }
  return [];
};

const setDiagnosisTimestamp = timestamp => {
  const json = JSON.stringify({ timestamp });
  console.log(json);
  invoke(window.NativeBridge, 'setBridgeData', filledDiagnosis, json);
};

export default {
  setDiagnosisTimestamp,
  getMatchedDevices
};
