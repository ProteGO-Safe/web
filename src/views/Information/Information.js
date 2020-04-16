import React from 'react';

import { Button, Container, FieldSet } from '../../components';
import { Header } from '../../components/Header';
import warning from '../../assets/img/icons/warning.svg';
import './Information.scss';

const Complete = ({ hideInformation }) => {
  return (
    <div className="view view__information">
      <Header hideBackButton hideMenuButton />
      <Container>
        <div className="content">
          <h3 className="h3">
            Test oceny ryzyka <br /> zarażenia COVID-19
          </h3>
          <p className="p1">
            Jedną z głównych funkcji tej aplikacji jest Test oceny ryzyka
            zarażenia COVID-19 zgodnie z wytycznymi WHO (Światowej Organizacji
            Zdrowia)
          </p>
          <div className="warning--content">
            <span className="warning--label">
              <img src={warning} alt="Ważne" />
              Ważne
            </span>
            <p className="p2">Test:</p>
            <ul className="warning--list">
              <li>
                <strong>Nie jest diagnozą.</strong> Diagnozę może postawić
                wyłącznie lekarz i test medyczny na obecność wirusa.
              </li>
              <li>
                Pomaga <strong>monitorować</strong> swój stan zdrowia
              </li>
              <li>
                Musi zostać wypełniony w <strong>100% z prawdą.</strong>
              </li>
            </ul>
          </div>
        </div>

        <FieldSet>
          <Button onClick={hideInformation} text="DALEJ" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default Complete;
