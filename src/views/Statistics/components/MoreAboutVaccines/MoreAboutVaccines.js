import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const MoreAboutVaccines = () => {
  const { t } = useTranslation();
  const { goTo } = useNavigation();

  const handleClick = () => {
    goTo(Routes.InfoVaccinations);
  };

  return <Button onClick={handleClick} label={t('statistics_view_text_30')} />;
};

export default MoreAboutVaccines;
