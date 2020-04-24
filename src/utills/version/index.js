import { isIOSWebView } from '../native';

export const isVersionCompatibilityWithBluetoothModule = servicesStatus => {
  if (Object.keys(servicesStatus).length === 0) {
    return false;
  }
  if (isIOSWebView()) {
    return false;
  }
  return true;
}
