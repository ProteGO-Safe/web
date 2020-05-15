import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Settings from './Settings';
import { fetchServicesStatus } from '../../store/actions/nativeData';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../utils/servicesStatus/servicesStatus.constants';

const SettingsContainer = () => {
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

  const toggleChecked = () => {};

  const items = [
    {
      checked: isExposureNotificationOn,
      disabled: false,
      onChange: toggleChecked,
      label: 'Zgoda na używanie Bluetooth w celu wykrycia zagrożeń',
      name: 'bluetooth'
    }
  ];

  return (
    <Settings items={items} title="Ustawienia">
      Korzystamy z Modułu Bluetooth aby móc chronić się wzajemnie i umożliwić
      aplikacji informowanie o zagrożeniach.
    </Settings>
  );
};

export default SettingsContainer;
