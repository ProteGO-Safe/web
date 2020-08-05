import React from 'react';

import { withTranslation } from 'react-i18next';
import { InfoBorderContainer, Content } from './TriageInfoBorder.styled';
import useTriage from '../../../../hooks/useTriage';
import ArrowIcon from '../../../../assets/img/icons/angle-right.svg';
import { PhoneNumber } from '../../../../components';

const TriageInfoBorder = ({ t }) => {
  const {
    isCovid = false,
    isExposure = false,
    color,
    description,
    serious = [],
    riskLevel
  } = useTriage();

  const goToAdvice = () => {
    window.open('https://pacjent.gov.pl/teleporada', '_blank');
  };

  const renderItem = serious
    .map(_obj => _obj.common_name)
    .map(item => <li key={item}>{t(item)}</li>);

  const renderContent = () => {
    if (isCovid) {
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
          <Content onClick={goToAdvice}>
            {t('triage_info_border_text5')}
            <img src={ArrowIcon} alt="button" />
          </Content>
          {t('triage_info_border_text6')} <PhoneNumber>112</PhoneNumber> lub{' '}
          <PhoneNumber>999</PhoneNumber>
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
