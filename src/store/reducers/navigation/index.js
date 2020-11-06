import {
  ROUTE_CHANGED,
  GO_TO_PREVIOUS_ROUTE_SUCCESS,
  BACK_PRESSED
} from '../../types/navigation';
import { Routes } from '../../../services/navigationService/routes';

const INITIAL_STATE = {
  currentRoute: {
    route: undefined,
    params: undefined
  },
  backRoute: undefined,
  previousRoutes: [],
  backPressedMarker: 0
};

const resolveCurrentRoute = (state, lastRoutes) => {
  const { backRoute, currentRoute } = state;
  return backRoute
    ? { route: backRoute, params: undefined }
    : lastRoutes || currentRoute;
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROUTE_CHANGED: {
      const {
        data: { route, params, backRoute }
      } = action;
      const { currentRoute, previousRoutes = [] } = state;

      return {
        ...state,
        currentRoute: {
          route,
          params
        },
        previousRoutes:
          route === Routes.Home ? [] : [...previousRoutes, currentRoute],
        backRoute: route === Routes.Home ? undefined : backRoute
      };
    }
    case GO_TO_PREVIOUS_ROUTE_SUCCESS: {
      const { previousRoutes = [] } = state;
      const copyPreviousRoutes = [...previousRoutes];
      const lastRoutes = copyPreviousRoutes.pop();
      const currentRoute = resolveCurrentRoute(state, lastRoutes);
      const { route } = currentRoute;
      return {
        ...state,
        currentRoute,
        previousRoutes: route === Routes.Home ? [] : copyPreviousRoutes,
        backRoute: undefined
      };
    }
    case BACK_PRESSED: {
      const { backPressedMarker = 0 } = state;
      return {
        ...state,
        backPressedMarker: backPressedMarker + 1
      };
    }
    default:
      return state;
  }
};

export default navigationReducer;
