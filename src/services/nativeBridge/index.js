import invoke from 'lodash.invoke';
import bcrypt from 'bcryptjs';
import { filledDiagnosis } from './dataType';

const setPhoneNumber = phoneNumber => {
  const hash = bcrypt.hashSync(phoneNumber, 10);
  invoke(window.NativeBridge, 'setPhoneNumberHash', hash);
};

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
  setPhoneNumber,
  getMatchedDevices
};
