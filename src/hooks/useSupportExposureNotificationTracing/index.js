import { useSelector } from 'react-redux';
import { isIOSWebView } from '../../utils/native';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../utils/servicesStatus/servicesStatus.constants';
import { enableServices } from '../../store/actions/nativeData';

const useSupportExposureNotificationTracing = () => {
  const {
    servicesStatus: {
      isLocationOn,
      isBtOn,
      isNotificationEnabled,
      exposureNotificationStatus
    }
  } = useSelector(state => state.nativeData);

  const areEnableAllServices =
    (isIOSWebView() || isLocationOn) &&
    isBtOn &&
    isNotificationEnabled &&
    exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.ON;

  const isExposureNotificationEnabled =
    exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.OFF;

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
    handleEnableServices
  };
};

export default useSupportExposureNotificationTracing;
