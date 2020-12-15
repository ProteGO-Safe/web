import React from 'react';
import { useSelector } from 'react-redux';
import useFilledDiagnosis from '../../../../../../hooks/useFilledDiagnosis';
import { getExposureAggregateStatistics } from '../../../../../../store/selectors/nativeData';
import ListStats from './ListStats';
import { getFormattedDate } from '../../../../../../utils/date';

const ListStatsContainer = ({ isInfected }) => {
  const { lastDate } = useFilledDiagnosis();
  const { lastRiskCheckTimestamp } = useSelector(getExposureAggregateStatistics);

  return (
    <ListStats
      dateLastRiskTest={getFormattedDate(lastRiskCheckTimestamp)}
      dateRiskMonitoring={lastDate}
      isInfected={isInfected}
    />
  );
};

export default ListStatsContainer;
