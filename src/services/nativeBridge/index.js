import invoke from 'lodash.invoke';
import bcrypt from 'bcryptjs';

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

export default {
  setPhoneNumber,
  getMatchedDevices
};
