import React from 'react';
import { COLLAPSES } from './RiskTestHighCovid.helpers';
import RiskTestHighCovid from './RiskTestHighCovid';

const RiskTestHighCovidContainer = () => {
  return <RiskTestHighCovid collapseItems={COLLAPSES} />;
};

export default RiskTestHighCovidContainer;
