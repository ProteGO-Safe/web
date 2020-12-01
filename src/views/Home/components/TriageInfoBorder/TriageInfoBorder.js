import React from 'react';

import useTriage from '../../../../hooks/useTriage';
import { T } from '../../../../components';
import { InfoBorderContainer } from './TriageInfoBorder.styled';

const TriageInfoBorder = () => {
  const {
    isCovid = false,
    isExposure = false,
    isManualCovid,
    color,
    description,
    serious = [],
    riskLevel
  } = useTriage();

  const renderItem = serious
    .map(_obj => _obj.common_name)
    .map(item => (
      <li key={item}>
        <T i18nKey={item} />
      </li>
    ));

  const renderContent = () => {
    if (isCovid || isManualCovid) {
      return (
        <>
          <T i18nKey="triage_info_border_text1" />
        </>
      );
    }
    if (isExposure && riskLevel === 1) {
      return (
        <>
          <T i18nKey="triage_info_border_text2" />
        </>
      );
    }
    if (isExposure && riskLevel === 2) {
      return (
        <>
          <T i18nKey="triage_info_border_text3" />
        </>
      );
    }
    if (isExposure && riskLevel === 3) {
      return <T i18nKey="triage_info_border_text4" />;
    }
    if (renderItem.length === 0) {
      return (
        <>
          <T i18nKey={description} />
        </>
      );
    }
    return (
      <>
        <T i18nKey={description} />
        &nbsp;
        <T i18nKey="triage_info_border_text8" />
      </>
    );
  };

  return (
    <InfoBorderContainer color={color}>
      <span className="p1">{renderContent()}</span>
      {renderItem.length >= 1 && <ul>{renderItem}</ul>}
    </InfoBorderContainer>
  );
};

export default TriageInfoBorder;
