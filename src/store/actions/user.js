import * as types from '../types/user';
import { registrationFinished } from './app';

export const saveUserNameRequested = data => ({
  data,
  type: types.USER_NAME_SAVE
});

export const saveUserRequested = data => ({
  data,
  type: types.USER_SAVE
});

export function saveUserName(data) {
  return async dispatch => {
    dispatch(saveUserNameRequested(data));
    dispatch(registrationFinished());
  };
}

export function saveUser(data) {
  return async dispatch => {
    dispatch(saveUserRequested(data));
  };
}

export const wholeUserUpdated = data => ({
  data,
  type: types.WHOLE_USER_UPDATED
});

export function updateWholeUser(data) {
  return dispatch => {
    dispatch(wholeUserUpdated(data));
  };
}
