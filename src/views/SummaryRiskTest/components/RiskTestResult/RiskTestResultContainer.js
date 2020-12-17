import React from 'react';
import useColor from '../../hooks/useColor';
import useIcon from '../../hooks/useIcon';
import RiskTestResult from './RiskTestResult';
import useRiskLevel from '../../hooks/useRiskLevel';

const RiskTestResultContainer = () => {
  const color = useColor();
  const icon = useIcon();
  const riskLevel = useRiskLevel();
  return <RiskTestResult color={color} icon={icon} riskLevel={riskLevel} />;
};

export default RiskTestResultContainer;
