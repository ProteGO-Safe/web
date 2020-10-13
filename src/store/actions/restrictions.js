import * as types from '../types/restrictions';
import nativeBridge from '../../services/nativeBridge';

export const fetchDistrictsStatusSuccess = body => ({
  body,
  type: types.FETCH_DISTRICTS_STATUS_SUCCESS
});

export const fetchDistrictsStatus = () => {
  return dispatch => {
    nativeBridge.getDistrictsStatus().then(body => {
      if (body) {
        dispatch(fetchDistrictsStatusSuccess(body));
      }
    });
  };
};

export const fetchSubscribedDistrictsSuccess = body => ({
  body,
  type: types.FETCH_SUBSCRIBED_DISTRICTS_SUCCESS
});

export const fetchSubscribedDistricts = () => {
  return dispatch => {
    nativeBridge.getSubscribedDistricts().then(body => {
      if (body) {
        dispatch(fetchSubscribedDistrictsSuccess(body));
      }
    });
  };
};

export const unsubscribeDistrictSuccess = body => ({
  body,
  type: types.UNSUBSCRIBED_DISTRICTS_SUCCESS
});

export const unsubscribeDistrict = districtId => {
  return dispatch => {
    nativeBridge.setDistrictSubscription(districtId, false).then(body => {
      if (body) {
        dispatch(unsubscribeDistrictSuccess(body));
      }
    });
  };
};

export const subscribeDistrictSuccess = body => ({
  body,
  type: types.UNSUBSCRIBED_DISTRICTS_SUCCESS
});

export const subscribeDistrict = districtId => {
  return dispatch => {
    nativeBridge.setDistrictSubscription(districtId, true).then(body => {
      if (body) {
        dispatch(subscribeDistrictSuccess(body));
      }
    });
  };
};
