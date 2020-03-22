import * as types from '../types/user';

export const saveUserRequested = data => ({
  data,
  type: types.USER_SAVE
});

export const hideInformationScreenRequested = () => ({
  type: types.HIDE_INFORMATION_SCREEN
});

export function saveUser(data) {
  return dispatch => {
    dispatch(saveUserRequested(data));
  };
}

export function hideInformationScreen() {
  return dispatch => {
    dispatch(hideInformationScreenRequested());
  };
}
