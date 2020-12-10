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

export const goToPreviousRouteSuccess = () => ({
  type: types.GO_TO_PREVIOUS_ROUTE_SUCCESS
});

export const goToPreviousRoute = () => {
  return dispatch => {
    dispatch(goToPreviousRouteSuccess());
  };
};

export const resetNavigationState = () => ({
  type: types.RESET_NAVIGATION_STATE
});

export const setNavigationRoot = root => ({
  data: { root },
  type: types.SET_NAVIGATION_ROOT
});
