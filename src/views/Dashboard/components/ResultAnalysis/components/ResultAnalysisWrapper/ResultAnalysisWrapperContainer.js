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

  const resolvePipeColor = () => {
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
    if (isTriageEnMiddle) {
      return Color.info;
    }
    if (or(isTriageTorMiddle, isTriageTorMiddleEnLow)) {
      return Color.info;
    }
    if (or(isTriageTorLow, isTriageEnLow)) {
      return Color.green_1;
    }

    return Color.gradient_c2;
  };

  const resolveBackgroundColor = () => {
    if (isTriageEnMiddle) {
      return Color.info;
    }
    if (isTriageEnHigh) {
      return Color.red;
    }
    return Color.white;
  };

  const resolveFontColor = () => {
    if (or(isTriageEnMiddle, isTriageEnHigh)) {
      return Color.white;
    }
    return Color.black;
  };

  return (
    <ResultAnalysisWrapper
      pipeColor={resolvePipeColor()}
      backgroundColor={resolveBackgroundColor()}
      fontColor={resolveFontColor()}
    >
      {children}
    </ResultAnalysisWrapper>
  );
};

export default ResultAnalysisWrapperContainer;
