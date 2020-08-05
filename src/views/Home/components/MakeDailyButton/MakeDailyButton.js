import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { Button } from '../../../../components';
import useTriage from '../../../../hooks/useTriage';

const MakeDailyButton = () => {
  const history = useHistory();
  const { isExposure = false, riskLevel } = useTriage();
  const goToDailyData = () => {
    history.push('/daily-data');
  };

  return (
    isExposure &&
    riskLevel === 2 && (
      <Button
        onClick={goToDailyData}
        label="Zmierz temperaturę"
        description="Zapisz ją w Dzienniku Zdrowia aplikacji"
        icon={<Icon />}
        type="borderArrow"
      />
    )
  );
};

export default MakeDailyButton;
