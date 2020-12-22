import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isequal from 'lodash.isequal';
import RiskMonitoring from './RiskMonitoring';
import { getExposureAggregateStatistics } from '../../../../../../store/selectors/nativeData';
import { fetchExposureAggregateStatistics } from '../../../../../../store/actions/nativeData';

const RiskMonitoringContainer = () => {
  const dispatch = useDispatch();

  const exposureAggregateStatistics = useSelector(getExposureAggregateStatistics);
  const { todayKeysCount, last7daysKeysCount, totalKeysCount } = exposureAggregateStatistics;

  useEffect(() => {
    dispatch(fetchExposureAggregateStatistics());
    // eslint-disable-next-line
  }, [dispatch]);

  if (isequal(exposureAggregateStatistics, {})) {
    return null;
  }

  return (
    <RiskMonitoring
      keyAnalysisToday={todayKeysCount}
      keyAnalysisWeek={last7daysKeysCount}
      keyAnalysisTotal={totalKeysCount}
    />
  );
};

export default RiskMonitoringContainer;
