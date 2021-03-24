import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from '../../../../theme/colors';
import { Routes } from '../../../../services/navigationService/routes';
import ExposureNotification from './ExposureNotification';
import useSupportExposureNotificationTracing from '../../../../hooks/useSupportExposureNotificationTracing';
import { fetchServicesStatus } from '../../../../store/actions/nativeData';
import { fetchExposureAggregateStatistics } from '../../../../store/actions/statistics';
import { getExposureAggregateStatistics } from '../../../../store/selectors/statistics';

const ExposureNotificationContainer = () => {
  const dispatch = useDispatch();
  const { todayKeysCount, last7daysKeysCount, totalKeysCount } = useSelector(getExposureAggregateStatistics);
  const { areEnableAllServices, handleEnableServices } = useSupportExposureNotificationTracing();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchExposureAggregateStatistics());
    dispatch(fetchServicesStatus());
    // eslint-disable-next-line
  }, [dispatch]);

  const handleOpen = () => setOpen(prev => !prev);

  const color = areEnableAllServices ? Color.green_1 : Color.red;

  return (
    <ExposureNotification
      active={areEnableAllServices}
      color={color}
      handleEnable={handleEnableServices}
      pathToEnable={Routes.HowItWorks}
      handleToggleButton={handleOpen}
      open={open}
      todayKeys={todayKeysCount}
      lastWeekKeys={last7daysKeysCount}
      allKeys={totalKeysCount}
    />
  );
};

export default ExposureNotificationContainer;
