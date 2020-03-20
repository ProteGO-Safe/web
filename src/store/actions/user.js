import * as types from '../types/user';

export const saveUserRequested = data => ({
  data,
  type: types.USER_SAVE
});

export function saveUser({
  age,
  sex,
  name,
  chronic_sick,
  chronic_sick_other,
  term1,
  term2
}) {
  const data = {
    age,
    sex,
    name,
    chronic_sick,
    chronic_sick_other,
    term1,
    term2
  };
  return dispatch => {
    dispatch(saveUserRequested(data));
  };
}
