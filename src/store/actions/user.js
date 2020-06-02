import * as types from '../types/user';

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
  };
}

export function saveUser(data) {
  return async dispatch => {
    dispatch(saveUserRequested(data));
  };
}
