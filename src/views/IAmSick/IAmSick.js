import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../components';
import { Header } from '../../components/Header';
import './IAmSick.scss';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const Complete = () => {
  return (
    <div className="view view__risk-information">
      <Header />
      <Container>
        <h4 className="text-warning">
          SAMOOBSERWACJA - POZOSTAŃ W DOMU I MONITORUJ STAN ZDROWIA
        </h4>
        <div className="content">
          <ol>
            <li>
              <span className="primary-2">Zostań w domu</span> i monitoruj stan
              swojego zdrowia. Zadzwoń na infolinię Narodowego Funduszu zdrowia
              800 190 590 lub do lokalnej placówki służby zdrowia. Ważne! Nie
              idź tam.
            </li>
            <li>
              Do minimum <strong>ogranicz kontakt</strong> z innymi ludźmi.
            </li>
            <li>
              <strong>Minimum raz dziennie</strong> uzupełniaj zakładkę{' '}
              <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link>: zapisuj w aplikacji
              objawy i temperaturę ciała.
            </li>
            <li>
              Ściśle przestrzegaj <strong>zasad higieny</strong>, podczas kaszlu
              i kichania - zasłaniaj usta i nos. Często i dokładnie myj ręce.
            </li>
            <li>
              Jeżeli pojawią się nowe objawy infekcji lub nasilą się
              dotychczasowe, ponów kontakt z infolinią NFZ 800 190 590 lub{' '}
              <strong>zadzwoń (nie idź!)</strong> do lokalnej placówki służby
              zdrowia.
            </li>
          </ol>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Complete;
