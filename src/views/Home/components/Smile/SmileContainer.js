import React from 'react';
import { useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';
import useFilledDiagnosis from '../../../../hooks/useFilledDiagnosis';
import useTriage from '../../../../hooks/useTriage';
import Smile from './Smile';

const SmileContainer = ({ t }) => {
  const { name: userName } = useSelector(state => state.user);
  const { lastDate } = useFilledDiagnosis();
  const { isCovid, isExposure, riskGroup, IconComponent } = useTriage();

  const getContent = () => {
    if (isCovid) {
      return <>{t('smile_container_text1')}</>;
    }
    if (isExposure) {
      return (
        <>
          <strong>{t('smile_container_text2')}</strong>{' '}
          {t('smile_container_text3')}&nbsp;
          <strong>{t(riskGroup)}</strong>.
        </>
      );
    }
    return (
      <>
        {t('smile_container_text4')}&nbsp;
        <strong className="nowrap">{lastDate}</strong>
        {t('smile_container_text5')}&nbsp;
        <strong>{t(riskGroup)}</strong>.
      </>
    );
  };
  return (
    <Smile
      userName={userName}
      IconComponent={IconComponent}
      content={getContent()}
    />
  );
};

export default withTranslation()(SmileContainer);
