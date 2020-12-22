export const getCurrentRoute = state => state.navigation.currentRoute && state.navigation.currentRoute.route;
export const getCurrentParams = state => state.navigation.currentRoute && state.navigation.currentRoute.params;
export const backPressedMarker = state => state.navigation.backPressedMarker;
