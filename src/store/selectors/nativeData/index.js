export const getNativeLanguage = state => state.nativeData.language;
export const getUploadLabTestPinResult = state =>
  state.nativeData.labTest && state.nativeData.labTest.uploadPinResult;
export const getLabTestSubscription = state =>
  state.nativeData.labTest && state.nativeData.labTest.subscription;
export const getLabTestPinUnsuccessfulAttempts = state =>
  state.nativeData.labTest && state.nativeData.labTest.pinUnsuccessfulAttempts;
export const getNativeRiskLevel = state => state.nativeData.riskLevel;
