import React from 'react';
import { COLLAPSES } from './RiskTestHighNoCovid.helpers';
import RiskTestHighNoCovid from './RiskTestHighNoCovid';

const RiskTestHighNoCovidContainer = () => {
  return <RiskTestHighNoCovid collapseItems={COLLAPSES} />;
};

export default RiskTestHighNoCovidContainer;
