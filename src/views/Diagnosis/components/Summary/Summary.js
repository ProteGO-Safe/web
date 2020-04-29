import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, FieldSet } from '../../../../components';
import success from '../../../../assets/img/icons/success-icon.svg';
import Header from '../../../../components/Header/Header';
import { Title } from '../../Diagnosis.styled';
import './Summary.scss';

const Summary = ({ onSave }) => (
  <div className="view view__summary">
    <Header hideBackButton />
    <Container>
      <div className="content">
        <img className="icon" src={success} alt="Gratulacje" />
        <Title>Gratulacje!</Title>
        <p className="big">
          Dziękujemy za wypełnienie Twojego Pierwszego Testu Oceny Ryzyka.
        </p>
        <p className="big">
          Na podstawie Twoich odpowiedzi, nasz system sprawdzi teraz do jakiej
          grupy Cię zakwalifikować.
        </p>
        <small>
          To bardzo ważne, abyś wypełniał/-a testy regularnie. Będziemy Ci o tym
          przypominać :)
        </small>
      </div>
      <FieldSet>
        <Button onClick={onSave} text="Sprawdź wynik" type="primary" />
      </FieldSet>
    </Container>
  </div>
);

Summary.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default Summary;
