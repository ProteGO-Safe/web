import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, FieldSet } from '../../../../components';
import { Header } from '../../../components';

import './Summary.scss';

const Summary = ({ onSave }) => (
  <div className="view view__summary">
    <Header />
    <Container>
      <div className="content content--1">
        <h4 className="medium">Gratulacje,</h4>
        <p className="big">
          Twoja pierwsza Ankieta Oceny Ryzyka przygotowana zgodnie z wytycznymi
          WHO została uzupełniona. Nasz system sprawdzi teraz do jakiej grupy
          kwalifikują się Twoje odpowiedzi.
        </p>
      </div>
      <div className="content content--2">
        <h4 className="medium">
          Pamiętaj, żeby Ankietę Oceny Ryzyka wypełniać regularnie - najlepiej
          1x na dobę - wtedy Twoja ocena ryzyka będzie aktualna.
        </h4>
      </div>
      <FieldSet>
        <Button onClick={onSave} text="Ok, wyświetl wynik" type="primary" />
      </FieldSet>
    </Container>
  </div>
);

Summary.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default Summary;
