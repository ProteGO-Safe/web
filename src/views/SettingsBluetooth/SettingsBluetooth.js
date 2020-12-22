import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  disableExposureNotificationService,
  enableExposureNotificationService,
  fetchServicesStatus
} from '../../store/actions/nativeData';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../utils/servicesStatus/servicesStatus.constants';
import { Layout, Settings, T } from '../../components';

const SettingsBluetooth = () => {
  const { servicesStatus: { exposureNotificationStatus = EXPOSURE_NOTIFICATION_STATUS.OFF } = {} } = useSelector(
    state => state.nativeData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesStatus());
  }, [dispatch]);

  const isExposureNotificationOn = (() => {
    return exposureNotificationStatus === EXPOSURE_NOTIFICATION_STATUS.ON;
  })();

  const toggleChecked = () => {
    if (isExposureNotificationOn) {
      disableExposureNotificationService();
    } else {
      enableExposureNotificationService();
    }
  };

  const items = [
    {
      checked: isExposureNotificationOn,
      disabled: false,
      onChange: toggleChecked,
      label: <T i18nKey="settings_container_text2" />,
      name: 'bluetooth'
    }
  ];

  return (
    <Layout isNavigation>
      <Settings items={items} title={<T i18nKey="settings_container_text3" />}>
        <T i18nKey="settings_container_text1" />
      </Settings>
    </Layout>
  );
};

export default SettingsBluetooth;
