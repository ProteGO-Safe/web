import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { BordersButton } from '../../../../components/BordersButton';
import useTriage from '../../../../hooks/useTriage';

const MakeDailyButton = () => {
  const history = useHistory();
  const { isExposure = false } = useTriage();
  const goToDailyData = () => {
    history.push('/daily-data');
  };

  return (
    isExposure && (
      <BordersButton
        onClick={goToDailyData}
        text="Zmierz temperaturę"
        icon={<Icon />}
      />
    )
  );
};

export default MakeDailyButton;
