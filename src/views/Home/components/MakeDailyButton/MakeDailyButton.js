import React from 'react';
import { useHistory } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { Button } from '../../../../components';
import useTriage from '../../../../hooks/useTriage';

const MakeDailyButton = ({ t }) => {
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
        label={t('make_daily_button_text1')}
        description={t('make_daily_button_text2')}
        icon={<Icon />}
        type="borderArrow"
      />
    )
  );
};

export default withTranslation()(MakeDailyButton);
