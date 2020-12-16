import React from 'react';
import { COLLAPSES } from './RiskTestHighSick.helpers';
import RiskTestHighSick from './RiskTestHighSick';

const RiskTestHighSickContainer = () => {
  return <RiskTestHighSick collapseItems={COLLAPSES} />;
};

export default RiskTestHighSickContainer;
