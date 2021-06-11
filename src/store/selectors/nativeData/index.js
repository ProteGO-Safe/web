export const getNativeLanguage = state => state.nativeData.language;
export const getLabTestSubscriptionStatus = state =>
  state.nativeData.labTest && state.nativeData.labTest.subscription && state.nativeData.labTest.subscription.status;
export const getTimeOfUpdatedSubscriptionStatus = state =>
  state.nativeData.labTest && state.nativeData.labTest.subscriptionUpdated;
export const getLabTestPinUnsuccessfulAttempts = state =>
  state.nativeData.labTest && state.nativeData.labTest.pinUnsuccessfulAttempts;
export const getNativeRiskLevel = state => state.nativeData.riskLevel;
export const getServicesStatus = state => state.nativeData.servicesStatus || {};
