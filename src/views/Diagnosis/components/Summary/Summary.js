import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, FieldSet } from '../../../../components';
import './Summary.scss';
import success from '../../../../assets/img/icons/success-icon.svg';
import Header from '../../../../components/Header/Header';

const Summary = ({ onSave }) => (
  <div className="view view__summary">
    <Header hideBackButton hideMenuButton />
    <Container>
      <div className="content">
        <img className="icon" src={success} alt="Gratulacje" />
        <h4 className="medium">Gratulacje!</h4>
        <p className="big">
          Dziękujemy za wypełnienie Twojego Pierwszego Testu Oceny Ryzyka.
        </p>
        <p className="big">
          Na podstawie Twoich odpowiedzi, nasz system sprawdzi teraz do jakiej
          grupy Cię zakwalifikować.
        </p>
        <small>
          To bardzo ważne, abyś wypełniała testy regularnie. Będziemy Ci o tym
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
