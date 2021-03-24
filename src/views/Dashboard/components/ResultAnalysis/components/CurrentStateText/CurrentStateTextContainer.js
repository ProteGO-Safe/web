import React from 'react';
import { or } from 'ramda';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import useTriage from '../../../../../../hooks/useTriage';
import CurrentStateText from './CurrentStateText';

const CurrentStateTextContainer = () => {
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

  const currentState = (() => {
    if (isCovidConfirmed) {
      return 'result_analysis_variant_8';
    }
    if (isCovidManual) {
      return 'result_analysis_variant_7';
    }

    if (or(isTriageTorLow, isTriageEnLow)) {
      return 'result_analysis_variant_2';
    }

    if (or(or(isTriageTorMiddle, isTriageEnMiddle), isTriageTorMiddleEnLow)) {
      return 'result_analysis_variant_3';
    }

    if (
      or(
        or(or(isTriageTorHighNoCovid, isTriageTorHighCovid), or(isTriageEnHigh, isTriageTorHighNoCovidEnLow)),
        isTriageTorHighCovidEnLow
      )
    ) {
      return 'result_analysis_variant_4';
    }

    return 'result_analysis_variant_1';
  })();

  return <CurrentStateText currentState={currentState} />;
};

export default CurrentStateTextContainer;
