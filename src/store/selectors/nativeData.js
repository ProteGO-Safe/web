export const selectMatchedDevices = state => {
  return state.nativeData.matchedDevices || [];
};
