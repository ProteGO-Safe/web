import {
  ROUTE_CHANGED,
  GO_TO_PREVIOUS_ROUTE_REQUESTED,
  GO_TO_PREVIOUS_ROUTE_SUCCESS
} from '../../types/navigation';
import { Routes } from '../../../services/navigationService/routes';

const INITIAL_STATE = {
  currentRoute: {
    route: undefined,
    params: undefined
  },
  backToPreviousRequested: false,
  backRoute: undefined,
  previousRoutes: []
};

const resolveCurrentRoute = (backRoute, lastRoutes) => {
  return backRoute ? { route: backRoute, params: undefined } : lastRoutes;
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
        previousRoutes: [...previousRoutes, currentRoute],
        backRoute
      };
    }
    case GO_TO_PREVIOUS_ROUTE_REQUESTED: {
      return {
        ...state,
        backToPreviousRequested: true
      };
    }
    case GO_TO_PREVIOUS_ROUTE_SUCCESS: {
      const { previousRoutes = [], backRoute } = state;
      const copyPreviousRoutes = [...previousRoutes];
      const lastRoutes = copyPreviousRoutes.pop();
      const currentRoute = resolveCurrentRoute(backRoute, lastRoutes);
      const { route } = currentRoute;
      return {
        ...state,
        currentRoute,
        previousRoutes: route === Routes.Home ? [] : copyPreviousRoutes,
        backToPreviousRequested: false,
        backRoute: undefined
      };
    }
    default:
      return state;
  }
};

export default navigationReducer;
