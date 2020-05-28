import React from 'react';

import { InfoBorderContainer, Content } from './TriageInfoBorder.styled';
import useTriage from '../../hooks/useTriage';
import ArrowIcon from '../../assets/img/icons/angle-right.svg';
import PhoneNumber from '../PhoneNumber';

const TriageInfoBorder = () => {
  const {
    isDangerous = false,
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
    .map(item => <li key={item}>{item}</li>);

  const renderContent = () => {
    if (isExposure && riskLevel === 2) {
      return (
        <>
          Regularnie obserwuj swój stan zdrowia, mierz temperaturę dwa razy
          dziennie i zapisuj ją w Dzienniku Zdrowia.
        </>
      );
    }
    if (isExposure && riskLevel === 3) {
      return (
        <>
          W przypadku pojawienia się objawów takich jak: gorączka, kaszel lub
          duszność, skontaktuj się telefonicznie ze swoim lekarzem lub
          skorzystaj z darmowej teleporady z pracownikiem medycznym.
          <Content onClick={goToAdvice}>
            Skorzystaj z teleporady
            <img src={ArrowIcon} alt="button" />
          </Content>
          Twój stan jest ciężki? Nie czekaj. Zadzwoń na numer alarmowy{' '}
          <PhoneNumber>112</PhoneNumber> lub <PhoneNumber>999</PhoneNumber> i
          uprzedź, że możesz mieć koronawirusa.
        </>
      );
    }
    return (
      <>
        {description}
        &nbsp;Szczególnie niepokojące objawy:
      </>
    );
  };

  return (
    isDangerous && (
      <InfoBorderContainer color={color}>
        <span className="p1">{renderContent()}</span>
        {renderItem.length >= 1 && <ul>{renderItem}</ul>}
      </InfoBorderContainer>
    )
  );
};

export default TriageInfoBorder;
