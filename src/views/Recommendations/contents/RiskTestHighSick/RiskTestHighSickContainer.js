import React from 'react';
import { COLLAPSES } from './RiskTestHighSick.helpers';
import RiskTestHighSick from './RiskTestHighSick';
import useTriage from '../../../../hooks/useTriage';

const RiskTestHighSickContainer = () => {
  const { serious = [] } = useTriage();

  const items = serious.map(_obj => _obj.common_name).map(item => item);

  return <RiskTestHighSick collapseItems={COLLAPSES} triageItems={items} />;
};

export default RiskTestHighSickContainer;
