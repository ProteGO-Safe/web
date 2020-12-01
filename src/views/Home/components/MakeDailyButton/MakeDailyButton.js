import React from 'react';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { Button, T } from '../../../../components';
import useTriage from '../../../../hooks/useTriage';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const MakeDailyButton = () => {
  const { goTo } = useNavigation();
  const { isExposure = false, riskLevel } = useTriage();
  const goToDailyData = () => {
    goTo(Routes.DailyData);
  };

  return (
    isExposure &&
    riskLevel === 2 && (
      <Button
        onClick={goToDailyData}
        label={<T i18nKey="make_daily_button_text1" />}
        description={<T i18nKey="make_daily_button_text2" />}
        icon={<Icon />}
        type="borderArrow"
      />
    )
  );
};

export default MakeDailyButton;
