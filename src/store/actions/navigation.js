import * as types from '../types/navigation';

export const routeChanged = data => ({
  data,
  type: types.ROUTE_CHANGED
});

export const changeRoute = data => {
  return dispatch => {
    dispatch(routeChanged(data));
  };
};

export const goToPreviousRouteRequested = () => ({
  type: types.GO_TO_PREVIOUS_ROUTE_REQUESTED
});

export const goToPreviousRouteSuccess = () => ({
  type: types.GO_TO_PREVIOUS_ROUTE_SUCCESS
});

export const goToPreviousRoute = () => {
  return dispatch => {
    dispatch(goToPreviousRouteRequested());
    dispatch(goToPreviousRouteSuccess());
  };
};

export const toHomeRouteWent = () => ({
  type: types.TO_HOME_ROUTE_WENT
});

export const goToHomeRoute = () => {
  return dispatch => {
    dispatch(toHomeRouteWent());
  };
};
