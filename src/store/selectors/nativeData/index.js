export const getNativeLanguage = state => state.nativeData.language;
export const getUploadLabTestPinResult = state => state.nativeData.labTest && state.nativeData.labTest.uploadPinResult;
export const getLabTestSubscriptionStatus = state =>
  state.nativeData.labTest && state.nativeData.labTest.subscription && state.nativeData.labTest.subscription.status;
export const getLabTestPinUnsuccessfulAttempts = state =>
  state.nativeData.labTest && state.nativeData.labTest.pinUnsuccessfulAttempts;
export const getNativeRiskLevel = state => state.nativeData.riskLevel;
export const getServicesStatus = state => state.nativeData.servicesStatus || {};
