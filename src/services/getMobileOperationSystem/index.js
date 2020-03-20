/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or undefined.
 *
 * @returns {String}
 */
import { ANDROID, IOS } from '../../constants';

const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    // don't handle windows phone on UI at the moment
    return undefined;
  }

  if (/android/i.test(userAgent)) {
    return ANDROID;
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return IOS;
  }

  return undefined;
};

export default getMobileOperatingSystem;
