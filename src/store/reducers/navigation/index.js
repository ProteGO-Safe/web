import * as type from '../../types/navigation';
import { Routes } from '../../../services/navigationService/routes';

const INITIAL_STATE = {
  currentRoute: {
    route: Routes.Home,
    params: undefined,
    root: Routes.Home
  },
  currentRoot: Routes.Home,
  previousRoutes: [], // {route : '', params: '', root: ''}
  backPressedMarker: 0
};

const resolveCurrentRoute = (state, lastRoutes) => {
  const { currentRoute } = state;
  return lastRoutes || currentRoute;
};

const preparePreviousRoutes = (state, newRoute) => {
  const { previousRoutes = [], currentRoute } = state;
  return [...previousRoutes, currentRoute].filter(({ root }) => root !== newRoute);
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.ROUTE_CHANGED: {
      const {
        data: { route, params, backRoute }
      } = action;
      const { currentRoot } = state;

      const previousRoutes = preparePreviousRoutes(state, route);

      return {
        ...state,
        currentRoute: {
          route,
          params,
          root: currentRoot
        },
        previousRoutes:
          route === Routes.Home
            ? []
            : [...previousRoutes, ...(backRoute ? [{ route: backRoute, root: Routes.Home }] : [])]
      };
    }
    case type.GO_TO_PREVIOUS_ROUTE_SUCCESS: {
      const { previousRoutes = [] } = state;
      const copyPreviousRoutes = [...previousRoutes];
      const lastRoutes = copyPreviousRoutes.pop();
      const currentRoute = resolveCurrentRoute(state, lastRoutes);
      const { route } = currentRoute;
      return {
        ...state,
        currentRoute,
        previousRoutes: route === Routes.Home ? [] : copyPreviousRoutes
      };
    }
    case type.BACK_PRESSED: {
      const { backPressedMarker = 0 } = state;
      return {
        ...state,
        backPressedMarker: backPressedMarker + 1
      };
    }
    case type.RESET_NAVIGATION_STATE: {
      const { backPressedMarker } = state;
      return {
        ...INITIAL_STATE,
        backPressedMarker
      };
    }
    case type.SET_NAVIGATION_ROOT: {
      const {
        data: { root }
      } = action;
      return {
        ...state,
        currentRoot: root
      };
    }

    default:
      return state;
  }
};

export default navigationReducer;
