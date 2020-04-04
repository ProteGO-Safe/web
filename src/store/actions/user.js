import * as types from '../types/user';
import { saveHashedPhoneNumber } from './nativeData';

export const saveUserRequested = data => ({
  data,
  type: types.USER_SAVE
});

export function saveUser(data) {
  return dispatch => {
    dispatch(saveHashedPhoneNumber(data.phone));
    dispatch(saveUserRequested(data));
  };
}
