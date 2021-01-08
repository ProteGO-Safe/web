import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from '../../../../theme/colors';
import { Routes } from '../../../../services/navigationService/routes';
import ExposureNotification from './ExposureNotification';
import useSupportExposureNotificationTracing from '../../../../hooks/useSupportExposureNotificationTracing';
import { fetchExposureAggregateStatistics, fetchServicesStatus } from '../../../../store/actions/nativeData';
import { getExposureAggregateStatistics } from '../../../../store/selectors/nativeData';
import { getFormattedDate } from '../../../../utils/date';

const ExposureNotificationContainer = () => {
  const dispatch = useDispatch();
  const { todayKeysCount, lastRiskCheckTimestamp } = useSelector(getExposureAggregateStatistics);
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
      keys={todayKeysCount}
      open={open}
      updatedKeysDate={getFormattedDate(lastRiskCheckTimestamp)}
    />
  );
};

export default ExposureNotificationContainer;
