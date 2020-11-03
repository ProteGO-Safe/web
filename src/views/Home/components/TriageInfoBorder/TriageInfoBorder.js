import React from 'react';

import { withTranslation } from 'react-i18next';
import useTriage from '../../../../hooks/useTriage';
import { PhoneNumber } from '../../../../components';
import {
  LinkArrow,
  Arrow,
  InfoBorderContainer
} from './TriageInfoBorder.styled';

const TriageInfoBorder = ({ t }) => {
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
    .map(item => <li key={item}>{t(item)}</li>);

  const renderContent = () => {
    if (isCovid || isManualCovid) {
      return <>{t('triage_info_border_text1')}</>;
    }
    if (isExposure && riskLevel === 1) {
      return <>{t('triage_info_border_text2')}</>;
    }
    if (isExposure && riskLevel === 2) {
      return <>{t('triage_info_border_text3')}</>;
    }
    if (isExposure && riskLevel === 3) {
      return (
        <>
          {t('triage_info_border_text4')}
          <LinkArrow href="https://pacjent.gov.pl/teleporada" target="_blank">
            {t('triage_info_border_text5')}
            <Arrow />
          </LinkArrow>
          {t('triage_info_border_text6')} <PhoneNumber>112</PhoneNumber>{' '}
          {t('triage_info_border_text9')} <PhoneNumber>999</PhoneNumber>{' '}
          {t('triage_info_border_text7')}
        </>
      );
    }
    if (renderItem.length === 0) {
      return <>{t(description)}</>;
    }
    return (
      <>
        {t(description)}
        &nbsp;{t('triage_info_border_text8')}
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

export default withTranslation()(TriageInfoBorder);
