import React from 'react';
import { not } from 'ramda';
import { useSelector } from 'react-redux';
import useFilledDiagnosis from '../../../../../../hooks/useFilledDiagnosis';
import { getExposureAggregateStatistics } from '../../../../../../store/selectors/statistics';
import ListStats from './ListStats';
import { getFormattedDate } from '../../../../../../utils/date';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import { ReactComponent as IconVirusSmall } from '../../../../../../assets/img/icons/virus-small.svg';
import { ReactComponent as IconVirusMiddle } from '../../../../../../assets/img/icons/virus-middle.svg';
import { ReactComponent as IconVirusHigh } from '../../../../../../assets/img/icons/virus-high.svg';
import useTriage from '../../../../../../hooks/useTriage';
import { Color } from '../../../../../../theme/colors';

const ListStatsContainer = () => {
  const { lastDate } = useFilledDiagnosis();
  const { lastRiskCheckTimestamp } = useSelector(getExposureAggregateStatistics);
  const { noEn } = useHealthStats();
  const { isTriageEnMiddle, isTriageEnHigh } = useTriage();

  const iconVirus = (() => {
    if (isTriageEnHigh) {
      return <IconVirusHigh />;
    }
    if (isTriageEnMiddle) {
      return <IconVirusMiddle />;
    }
    return <IconVirusSmall />;
  })();

  const firstBulletPointColor = (() => {
    if (isTriageEnHigh) {
      return Color.red;
    }
    if (isTriageEnMiddle) {
      return Color.info;
    }
    return undefined;
  })();

  return (
    <ListStats
      dateRiskMonitoring={getFormattedDate(lastRiskCheckTimestamp)}
      dateLastRiskTest={lastDate}
      firstBulletPointColor={firstBulletPointColor}
      iconVirus={iconVirus}
      isInfected={not(noEn)}
    />
  );
};

export default ListStatsContainer;
