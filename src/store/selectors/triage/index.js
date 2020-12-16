export const getTriage = state => state.triage;
export const getTimeOfConfirmedManualCovid = state => state.triage.timeOfConfirmedManualCovid;
export const getTimeOfConfirmedCovid = state => state.triage.timeOfConfirmedCovid;
export const getTriageLevel = state => state.triage.triageLevel;
export const getSerious = state => state.triage.serious || [];
