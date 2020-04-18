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
        <h4 className={`text-warning`}>
          SAMOOBSERWACJA - POZOSTAŃ W DOMU I MONITORUJ STAN ZDROWIA
        </h4>
        <div className="content">
          <ol>
            <li>
              <strong>
                <span className="primary-2">Zostań w domu</span> i monitoruj
                stan swojego zdrowia. Skontaktuj się z infolinią rządową{' '}
                800 190 590 lub{' '}
                <span className="primary-2">zadzwoń (nie idź!)</span> do
                lokalnej placówki służby zdrowia.
              </strong>
            </li>
            <li>
              <strong>
                Ogranicz kontakt z innymi ludźmi i domownikami do minimum.
                Przebywaj w osobnym pomieszczeniu i spożywaj posiłki o innych
                porach.
              </strong>
            </li>
            <li>
              <strong>
                Minimum dwa razy dziennie uzupełniaj w tej aplikacji zakładkę{' '}
                <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link>: monitoruj stan
                swojego zdrowia, zapisuj objawy i temperaturę ciała, notuj
                spotkane osoby.
              </strong>
            </li>
            <li>
              <strong>
                <span className="primary-2">
                  Ściśle przestrzegaj zasad higieny
                </span>
                , zasłaniaj usta podczas kaszlu i kichania - używaj chusteczki
                bądź zagięcia łokcia, wyrzucaj zużyte chusteczki oraz często i
                bardzo dokładnie myj ręce.{' '}
              </strong>
            </li>
            <li>
              <strong>NIE opuszczaj domu.</strong>
            </li>
            <li>
              <strong>NIE wychodź do sklepu.</strong>
            </li>
            <li>
              <strong>NIE spaceruj z psem po swojej okolicy.</strong>
            </li>
            <li>
              <strong>NIE spotykaj się z innymi osobami.</strong>
            </li>
            <li>
              <strong>Zadzwoń do rodziców i krewnych</strong> w podeszłym wieku.{' '}
              <strong>Zdalnie</strong> pomóż im korzystać z{' '}
              <span className="primary-2">
                <strong>ProteGO Safe</strong>
              </span>{' '}
              na ich telefonie.{' '}
              <strong>Zadbaj, by ktoś inny zrobił dla nich zakupy.</strong>
            </li>
            <li>
              Jeśli przyjechałeś/aś z zagranicy – skontaktuj się z sanepidem i
              poddaj się 14-dniowej kwarantannie.
            </li>
            <li>
              <strong>
                Jeżeli wystąpią lub nasilą się objawy infekcji, ponów kontakt z
                infolinią rządową 800 190 590 lub{' '}
                <span className="primary-2">zadzwoń (nie idź!)</span> do
                lokalnej placówki służby zdrowia.
              </strong>
            </li>
          </ol>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Complete;
