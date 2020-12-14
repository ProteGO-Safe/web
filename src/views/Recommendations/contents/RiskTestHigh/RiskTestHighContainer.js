import React from 'react';
import { COLLAPSES } from './RiskTestHigh.helpers';
import RiskTestHigh from './RiskTestHigh';
import useTriage from '../../../../hooks/useTriage';

const RiskTestHighContainer = () => {
  const { serious = [] } = useTriage();

  const items = serious.map(_obj => _obj.common_name).map(item => item);

  return <RiskTestHigh collapseItems={COLLAPSES} triageItems={items} />;
};

export default RiskTestHighContainer;
