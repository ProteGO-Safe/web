import React from 'react';
import useTriage from '../../../../hooks/useTriage';
import { PhoneNumber } from '../../../../components';
import {
  LinkArrow,
  Arrow,
  InfoBorderContainer
} from './TriageInfoBorder.styled';

const TriageInfoBorder = () => {
  const {
    isCovid = false,
    isExposure = false,
    color,
    description,
    serious = [],
    riskLevel
  } = useTriage();

  const renderItem = serious
    .map(_obj => _obj.common_name)
    .map(item => <li key={item}>{item}</li>);

  const renderContent = () => {
    if (isCovid) {
      return (
        <>
          Bardzo źle się czujesz? Nie czekaj. Zadzwoń na numer alarmowy 112 lub
          999. Poinformuj o swojej chorobie.
        </>
      );
    }
    if (isExposure && riskLevel === 1) {
      return (
        <>
          Pamiętaj, by regularnie myć ręce wodą z mydłem lub dezynfekować dłonie
          oraz zachowywać dystans społeczny.
        </>
      );
    }
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
          <LinkArrow href="https://pacjent.gov.pl/teleporada" target="_blank">
            Skorzystaj z teleporady
            <Arrow />
          </LinkArrow>
          Twój stan jest ciężki? Nie czekaj. Zadzwoń na numer alarmowy{' '}
          <PhoneNumber>112</PhoneNumber> lub <PhoneNumber>999</PhoneNumber> i
          uprzedź, że możesz mieć koronawirusa.
        </>
      );
    }
    if (renderItem.length === 0) {
      return <>{description}</>;
    }
    return (
      <>
        {description}
        &nbsp;Szczególnie niepokojące objawy:
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
