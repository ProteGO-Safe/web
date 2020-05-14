export const isVersionCompatibilityWithBluetoothModule = (
  servicesStatus = {}
) => {
  if (Object.keys(servicesStatus).length === 0) {
    return false;
  }
  return true;
};
