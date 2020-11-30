window.onBridgeData(
  61,
  JSON.stringify({
    riskLevel: 3
  })
);

window.bridgeDataResponse(
  JSON.stringify({
    riskLevel: 3
  }),
  61,
  'request-1'
);
