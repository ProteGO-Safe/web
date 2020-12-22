import { useSelector } from 'react-redux';
import { isIOSWebView } from '../../utils/native';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../utils/servicesStatus/servicesStatus.constants';
import { enableServices } from '../../store/actions/nativeData';
import { getServicesStatus } from '../../store/selectors/nativeData';

const useSupportExposureNotificationTracing = () => {
  const {
    isLocationOn,
    isBtOn,
    isNotificationEnabled,
    exposureNotificationStatus,
    receivedServicesStatusMarker
  } = useSelector(getServicesStatus);

  const areEnableAllServices =
    (isIOSWebView() || isLocationOn) &&
    isBtOn &&
    isNotificationEnabled &&
    exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.ON;

  const isExposureNotificationEnabled = exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.OFF;

  const handleEnableServices = () => {
    const servicesState = {};
    if (!(isIOSWebView() || isLocationOn)) {
      servicesState.enableLocation = true;
    }
    if (!isBtOn) {
      servicesState.enableBt = true;
    }
    if (!isNotificationEnabled) {
      servicesState.enableNotification = true;
    }
    if (isExposureNotificationEnabled) {
      servicesState.enableExposureNotificationService = true;
    }
    enableServices(servicesState);
  };

  return {
    areEnableAllServices,
    handleEnableServices,
    receivedServicesMarker: receivedServicesStatusMarker
  };
};

export default useSupportExposureNotificationTracing;
