window.bridgeDataResponse(
  JSON.stringify({
    riskCheck: {
      lastRiskCheckTimestamp: 123234234,
      todayKeysCount: 8000,
      last7daysKeysCount: 28000,
      totalKeysCount: 2500500
    }
  }),
  103,
  'request-1'
);
