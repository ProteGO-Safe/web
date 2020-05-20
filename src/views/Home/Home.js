import React from 'react';
import {
  Header,
  Badge,
  Container,
  Smile,
  TriageRiskInformation,
  TriageInfoBorder,
  BordersButton,
  BottomNavigation,
  TriageRecommendations
} from '../../components';
import './Home.scss';
import { ExposureNotificationWarning } from './components';

import { Icon } from '../RiskTest/RiskTest.styled';

const Home = ({ onClickGoToDiagnosis }) => {
  return (
    <div className="view view__home">
      <Header hideBackButton />
      <Container>
        <ExposureNotificationWarning />
        <Badge />
        <Smile />
        <BordersButton
          onClick={onClickGoToDiagnosis}
          text="Wykonaj TEST oceny ryzyka"
          icon={<Icon />}
        />
        <TriageRiskInformation />
        <TriageInfoBorder />
        <TriageRecommendations />
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
