import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components';

const MoreAboutVaccines = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    // todo PSAFE-3522
    // do something...
  };

  return <Button onClick={handleClick} label={t('statistics_view_text_30')} />;
};

export default MoreAboutVaccines;
