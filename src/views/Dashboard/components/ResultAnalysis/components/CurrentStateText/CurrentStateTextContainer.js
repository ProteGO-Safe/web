import React from 'react';
import { or } from 'ramda';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import useTriage from '../../../../../../hooks/useTriage';
import CurrentStateText from './CurrentStateText';
import useLabTest from '../../../../../../hooks/useLabTest';

const CurrentStateTextContainer = ({ hideContactDetectedText }) => {
  const { isCovidConfirmed, isCovidManual } = useHealthStats();
  const { isSubscriptionConfirmed } = useLabTest();
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
    if (isSubscriptionConfirmed) {
      return 'result_analysis_variant_9';
    }
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

  const contactDetected = (() => {
    if (hideContactDetectedText) {
      return undefined;
    }

    if (or(isTriageEnMiddle, isTriageEnHigh)) {
      return 'result_analysis_variant_10';
    }

    return undefined;
  })();

  return <CurrentStateText contactDetected={contactDetected} currentState={currentState} />;
};

export default CurrentStateTextContainer;
