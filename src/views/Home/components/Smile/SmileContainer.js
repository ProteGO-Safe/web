import React from 'react';
import useFilledDiagnosis from '../../../../hooks/useFilledDiagnosis';
import useTriage from '../../../../hooks/useTriage';
import Smile from './Smile';
import useUserName from '../../../../hooks/useUserName';
import { T } from '../../../../components/T';

const SmileContainer = () => {
  const userName = useUserName();
  const { lastDate } = useFilledDiagnosis();
  const { exposureRiskLevel, isCovid, isExposure, isManualCovid, riskGroup, IconComponent } = useTriage();

  const getContent = () => {
    if (isCovid) {
      return <T i18nKey="smile_container_text1" />;
    }
    if (isManualCovid) {
      return <T i18nKey="smile_container_text6" />;
    }
    if (isExposure && exposureRiskLevel === 1) {
      return <T i18nKey="smile_container_text7" />;
    }
    if (isExposure && exposureRiskLevel === 2) {
      return <T i18nKey="smile_container_text8" />;
    }
    if (isExposure && exposureRiskLevel === 3) {
      return <T i18nKey="smile_container_text9" />;
    }
    return <T i18nKey="smile_container_text4" variables={{ date: lastDate, group: <T i18nKey={riskGroup} /> }} />;
  };
  return <Smile userName={userName} IconComponent={IconComponent} content={getContent()} />;
};

export default SmileContainer;
