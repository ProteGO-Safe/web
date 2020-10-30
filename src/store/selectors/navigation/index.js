export const getCurrentRoute = state =>
  state.navigation.currentRoute && state.navigation.currentRoute.route;
export const getCurrentParams = state =>
  state.navigation.currentRoute && state.navigation.currentRoute.params;
export const isBackToPreviousRequested = state =>
  state.navigation.backToPreviousRequested;
