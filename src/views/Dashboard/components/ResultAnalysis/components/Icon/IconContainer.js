import React from 'react';
import { or } from 'ramda';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import useTriage from '../../../../../../hooks/useTriage';
import Icon from './Icon';

import { ReactComponent as FaceLow } from '../../../../../../assets/img/icons/face-low.svg';
import { ReactComponent as FaceMiddle } from '../../../../../../assets/img/icons/face-middle.svg';
import { ReactComponent as FaceHigh } from '../../../../../../assets/img/icons/face-high.svg';
import { ReactComponent as ENLow } from '../../../../../../assets/img/icons/en-low.svg';
import { ReactComponent as ENMiddle } from '../../../../../../assets/img/icons/en-middle-circle.svg';
import { ReactComponent as ENHigh } from '../../../../../../assets/img/icons/en-high-circle.svg';
import { ReactComponent as VirusHigh } from '../../../../../../assets/img/icons/virus-high.svg';

const IconContainer = () => {
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

  const icon = (() => {
    if (or(isCovidConfirmed, isCovidManual)) {
      return <VirusHigh />;
    }

    if (isTriageTorLow) {
      return <FaceLow />;
    }

    if (or(isTriageTorMiddle, isTriageTorMiddleEnLow)) {
      return <FaceMiddle />;
    }

    if (
      or(or(isTriageTorHighNoCovid, isTriageTorHighCovid), or(isTriageTorHighNoCovidEnLow, isTriageTorHighCovidEnLow))
    ) {
      return <FaceHigh />;
    }
    if (isTriageEnLow) {
      return <ENLow />;
    }
    if (isTriageEnMiddle) {
      return <ENMiddle />;
    }
    if (isTriageEnHigh) {
      return <ENHigh />;
    }

    return null;
  })();

  const isBig = or(isTriageEnMiddle, isTriageEnHigh);

  if (icon === null) {
    return null;
  }

  return <Icon icon={icon} isBig={isBig} />;
};

export default IconContainer;
