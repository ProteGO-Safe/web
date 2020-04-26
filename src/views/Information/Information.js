import React from 'react';
import { useSelector } from 'react-redux';

import { Button, Container, FieldSet } from '../../components';
import { Header } from '../../components/Header';
import warning from '../../assets/img/icons/warning.svg';
import './Information.scss';

const Complete = ({ hideInformation }) => {
  const { triageLevel } = useSelector(state => state.triage);

  return (
    <div className="view view__information">
      <Header hideMenuButton hideBackButton={triageLevel === ''} />
      <Container>
        <div className="content">
          <h3 className="h3">Test oceny ryzyka zakażenia koronawirusem</h3>
          <p className="p1">
            Jedną z głównych funkcji tej aplikacji jest test oceny ryzyka
            zakażenia koronawirusem. Przygotowaliśmy go zgodnie z wytycznymi
            Światowej Organizacji Zdrowia (WHO).
          </p>
          <div className="warning--content">
            <span className="warning--label">
              <img src={warning} alt="Ważne" />
              Ważne
            </span>
            <p className="p2">Test:</p>
            <ul className="warning--list">
              <li>
                <strong>Test nie jest diagnozą.</strong> Tę mogą postawić
                wyłącznie lekarz i test medyczny na obecność wirusa.
              </li>
              <li>
                Pomaga <strong>monitorować</strong> swój stan zdrowia.
              </li>
              <li>
                Wypełnij go <strong>zgodnie z prawdą</strong> - robisz to dla
                własnego <strong>bezpieczeństwa.</strong>
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
