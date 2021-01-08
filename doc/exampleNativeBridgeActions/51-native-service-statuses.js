window.onBridgeData(
  51,
  JSON.stringify({
    servicesStatus: {
      exposureNotificationStatus: 1,
      isLocationOn: true,
      isBtOn: true,
      isNotificationEnabled: true
    }
  })
);

window.bridgeDataResponse(
  JSON.stringify({
    servicesStatus: {
      exposureNotificationStatus: 1,
      isLocationOn: true,
      isBtOn: true,
      isNotificationEnabled: true
    }
  }),
  51,
  'request-1'
);
