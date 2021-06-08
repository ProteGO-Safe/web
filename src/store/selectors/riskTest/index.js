export const getRiskTest = state => state.riskTest;
const obtainKey = entry => entry[0];
const obtainValue = entry => entry[1];
export const getTimeAndTriageLevelOfLastRiskTest = state => {
  const { riskTest } = state;

  if (!riskTest) {
    return {};
  }

  const keys = Object.keys(riskTest);

  if (keys.length === 0) {
    return {};
  }

  const timestamp = [...keys].pop();
  const triageLevel = Object.entries(riskTest)
    .filter(entry => obtainKey(entry) === timestamp)
    .map(entry => obtainValue(entry).triageLevel)
    .slice(-1)
    .pop();

  return { timestamp, triageLevel };
};
