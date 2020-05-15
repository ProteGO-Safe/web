import React from 'react';
import {
  Header,
  Badge,
  Container,
  Smile,
  Info,
  InfoBorder,
  BordersButton,
  BottomNavigation
} from '../../components';
import './Home.scss';
import { ExposureNotificationWarning } from './components';

import { Icon } from '../RiskTest/RiskTest.styled';

const Home = ({
  lastDate,
  infoContent,
  seriousNames,
  riskColor,
  riskDescription,
  riskGroup,
  riskInfo,
  riskLevel,
  showBadge,
  triage,
  userName,
  onClickGoToDiagnosis
}) => {
  return (
    <div className="view view__home">
      <Header hideBackButton />
      <Container>
        <ExposureNotificationWarning />
        {showBadge && <Badge />}
        <Smile
          userName={userName}
          lastDate={lastDate}
          riskGroup={riskGroup}
          icon={riskLevel}
        />
        <BordersButton
          onClick={onClickGoToDiagnosis}
          text="Wykonaj TEST oceny ryzyka"
          icon={<Icon />}
        />
        {triage && <Info color={riskColor} content={infoContent} />}
        {triage && (
          <InfoBorder
            content={riskDescription}
            color={riskColor}
            items={seriousNames}
          />
        )}
        {riskInfo}
        <div className="more-information">
          <h4>Więcej informacji</h4>
          <p>
            Aktualne informacje na temat sytuacji epidemicznej oraz inne porady
            i wskazówki, znajdziesz na www.gov.pl/koronawirus
          </p>
          <small>
            Wyniki Testu służą wyłącznie celom informacyjnym oraz edukacyjnym.
            Nie traktuj ich jako konsultacji lub diagnozy lekarskiej.
          </small>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Home;
