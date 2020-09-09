import * as types from '../types/daily';

export const dailyAddRequested = ({ data }) => ({
  data,
  type: types.DAILY_ADD
});

export function addDaily(data) {
  return async dispatch => {
    dispatch(dailyAddRequested({ data }));
  };
}

export const dailyUpdateRequested = ({ data, id }) => ({
  data,
  id,
  type: types.DAILY_UPDATE
});

export function updateDaily(data, id) {
  return async dispatch => {
    dispatch(dailyUpdateRequested({ data, id }));
  };
}
