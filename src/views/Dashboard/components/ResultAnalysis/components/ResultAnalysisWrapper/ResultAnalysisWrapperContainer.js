import React from 'react';
import { or } from 'ramda';
import { Color } from '../../../../../../theme/colors';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import useTriage from '../../../../../../hooks/useTriage';
import ResultAnalysisWrapper from './ResultAnalysisWrapper';

const ResultAnalysisWrapperContainer = ({ children }) => {
  const { isCovidConfirmed, isCovidManual } = useHealthStats();
  const {
    isTriageTorLow,
    isTriageTorMiddle,
    isTriageTorHighNoCovid,
    isTriageTorHighCovid,
    isTriageEnLow,
    isTriageEnMiddle,
    isTriageEnHigh,
    isTriageTorMiddleEnLow,
    isTriageTorHighNoCovidEnLow,
    isTriageTorHighCovidEnLow
  } = useTriage();

  const resolveColor = () => {
    if (or(isCovidConfirmed, isCovidManual)) {
      return Color.red;
    }
    if (
      or(
        or(or(isTriageTorHighNoCovid, isTriageTorHighCovid), or(isTriageEnHigh, isTriageTorHighNoCovidEnLow)),
        isTriageTorHighCovidEnLow
      )
    ) {
      return Color.red;
    }
    if (or(or(isTriageTorMiddle, isTriageEnMiddle), isTriageTorMiddleEnLow)) {
      return Color.info;
    }
    if (or(isTriageTorLow, isTriageEnLow)) {
      return Color.green_1;
    }

    return Color.gradient_c2;
  };

  return (
    <ResultAnalysisWrapper color={resolveColor()} bckColor={Color.danger} fontColor={Color.white}>
      {children}
    </ResultAnalysisWrapper>
  );
};

export default ResultAnalysisWrapperContainer;
