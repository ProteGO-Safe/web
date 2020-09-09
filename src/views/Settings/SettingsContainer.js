import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Settings from './Settings';
import {
  disableExposureNotificationService,
  enableExposureNotificationService,
  fetchServicesStatus
} from '../../store/actions/nativeData';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../utils/servicesStatus/servicesStatus.constants';

const SettingsContainer = ({ t }) => {
  const {
    servicesStatus: {
      exposureNotificationStatus = EXPOSURE_NOTIFICATION_STATUS.OFF
    } = {}
  } = useSelector(state => state.nativeData);
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
      label: t('settings_container_text2'),
      name: 'bluetooth'
    }
  ];

  return (
    <Settings items={items} title={t('settings_container_text3')}>
      {t('settings_container_text1')}
    </Settings>
  );
};

export default withTranslation()(SettingsContainer);
