import React from 'react';
import { useSelector } from 'react-redux';

import hasBadge from '../../utills/badge';
import Badge from './Badge';

const BadgeContainer = () => {
  const riskTest = useSelector(state => state.riskTest);

  const filledDays = Object.keys(riskTest);
  const showBadge = hasBadge(filledDays);

  return <>{showBadge && <Badge />}</>;
};

export default BadgeContainer;
