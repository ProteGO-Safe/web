import moment from 'moment';

import * as types from '../types/daily';

export const dailyAddRequested = ({ data }) => ({
  data,
  timestamp: moment().unix(),
  type: types.DAILY_ADD
});

export function addDaily(data) {
  return dispatch => {
    dispatch(dailyAddRequested({ data }));
  };
}
