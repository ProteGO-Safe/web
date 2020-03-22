import * as types from '../types/user';

export const saveUserRequested = data => ({
  data,
  type: types.USER_SAVE
});

export function saveUser(data) {
  return dispatch => {
    dispatch(saveUserRequested(data));
  };
}
