import React from 'react';
import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { useHistory, Link } from 'react-router-dom';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Button, Container, FieldSet } from '../../components';
import './AdviceInformation.scss';

import IconAdviceHome from '../../assets/img/fake/icon-advice-home.png';
import IconAdvicePhone from '../../assets/img/fake/icon-advice-phone.png';
import IconAdviceCountry from '../../assets/img/fake/icon-advice-country.png';
import IconAdviceNote from '../../assets/img/fake/icon-advice-note.png';
import IconWarning from '../../assets/img/icons/warning.svg';

const AdviceInformation = () => {
  const history = useHistory();

  return (
    <div className="view view__user-data">
      <Header />
      <Container>
        <h4 className="text-center medium">Porady</h4>
        <div className="content">
          <h3 className="medium">Przestrzegaj profilaktyki</h3>
          <ul>
            <li>
              <img src={IconAdviceHome} alt="advice icon" />
              <p className="medium">Zostań w domu do momentu odwołania zagrożenia epidemiologicznego.</p>
              </li>
            <li>
              <img src={IconAdvicePhone} alt="advice icon" />
              <p className="medium pl-10">Zadzwoń do rodziców i krewnych w podeszłym wieku. Pomóż im korzystać z ProteGo Safe na ich telefonie. Zrób dla nich zakupy. Unikaj kontaktu osobistego.</p>
            </li>
            <li>
              <img src={IconAdviceCountry} alt="advice icon" />
              <p className="medium">Jeśli przyjechałeś/-aś z zagranicy – skontaktuj się z sanepidem i poddaj się 14-dniowej kwarantannie.</p>
            </li>
            <li>
              <img src={IconAdviceNote} alt="advice icon" />
              <p className="medium">Monitoruj stan swojego zdrowia i zapisuj go w zakładce <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link> w tej aplikacji.</p>
              </li>
          </ul>
          <div className="warning">
            <img src={IconWarning} alt="warning icon" />
            <h3 className="text-error">Ważne</h3>
            <p className="medium">Jeśli u Ciebie lub Twoich bliskich wystąpią objawy infekcji COVID-19, skontaktuj się z infolinią rządową: 800 190 590 lub lokalną placówką służby zdrowia.</p>
          </div>
        </div>
        <FieldSet>
          <Button
            onClick={() => history.push(Routes.Home)}
            text="OK"
          />
        </FieldSet>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default AdviceInformation;
