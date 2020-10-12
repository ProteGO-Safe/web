import * as types from '../types/restrictions';
import nativeBridge from '../../services/nativeBridge';

export const fetchDistrictsStatusSuccess = body => ({
  body,
  type: types.FETCH_DISTRICTS_STATUS_SUCCESS
});

export function fetchDistrictsStatus() {
  return dispatch => {
    nativeBridge.getDistrictsStatus().then(body => {
      if (body) {
        dispatch(fetchDistrictsStatusSuccess(body));
      }
    });
  };
}
