import React from 'react';
import { COLLAPSES } from './RiskTestHigh.helpers';
import RiskTestHigh from './RiskTestHigh';

const RiskTestHighContainer = () => {
  return <RiskTestHigh collapseItems={COLLAPSES} />;
};

export default RiskTestHighContainer;
