import {
  TO_HOME_ROUTE_WENT,
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
  previousRoutes: []
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROUTE_CHANGED: {
      const {
        data: { route, params }
      } = action;
      const { currentRoute, previousRoutes = [] } = state;

      return {
        ...state,
        currentRoute: {
          route,
          params
        },
        previousRoutes: [...previousRoutes, currentRoute]
      };
    }
    case TO_HOME_ROUTE_WENT: {
      return {
        ...state,
        currentRoute: {
          route: Routes.Home,
          params: undefined
        },
        previousRoutes: []
      };
    }
    case GO_TO_PREVIOUS_ROUTE_REQUESTED: {
      return {
        ...state,
        backToPreviousRequested: true
      };
    }
    case GO_TO_PREVIOUS_ROUTE_SUCCESS: {
      const { previousRoutes = [] } = state;
      const copyPreviousRoutes = [...previousRoutes];
      const lastRoutes = copyPreviousRoutes.pop();
      return {
        ...state,
        currentRoute: lastRoutes,
        previousRoutes: copyPreviousRoutes,
        backToPreviousRequested: false
      };
    }
    default:
      return state;
  }
};

export default navigationReducer;
