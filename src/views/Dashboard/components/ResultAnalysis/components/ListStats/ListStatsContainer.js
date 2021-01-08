import React from 'react';
import { not } from 'ramda';
import { useSelector } from 'react-redux';
import useFilledDiagnosis from '../../../../../../hooks/useFilledDiagnosis';
import { getExposureAggregateStatistics } from '../../../../../../store/selectors/nativeData';
import ListStats from './ListStats';
import { getFormattedDate } from '../../../../../../utils/date';
import useHealthStats from '../../../../../../hooks/useHealthStats';

const ListStatsContainer = () => {
  const { lastDate } = useFilledDiagnosis();
  const { lastRiskCheckTimestamp } = useSelector(getExposureAggregateStatistics);
  const { noEn } = useHealthStats();

  return (
    <ListStats
      dateRiskMonitoring={getFormattedDate(lastRiskCheckTimestamp)}
      dateLastRiskTest={lastDate}
      isInfected={not(noEn)}
    />
  );
};

export default ListStatsContainer;
