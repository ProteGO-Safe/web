import React from 'react';
import PropTypes from 'prop-types';

import {
  Banner,
  Brand,
  Button,
  Container,
  FieldSet
} from '../../../../components';
import Background from '../../../../assets/img/banners/banner-1.png';

import './Summary.scss';

const Summary = ({ onSave }) => (
  <div className="view view__summary">
    <Banner background={Background}>
      <Brand white small content={false} />
    </Banner>
    <Container>
      <div className="content content--1">
        <h4 className="medium">Gratulacje,</h4>
        <p className="big">
          Twój pierwszy Kwestionariusz Oceny Ryzyka przygotowany zgodnie z
          wytycznymi WHO został uzupełniony. Nasz system sprawdzi teraz do
          jakiej grupy kwalifikują się Twoje odpowiedzi.
        </p>
      </div>
      <div className="content content--2">
        <h4 className="medium">
          Pamiętaj, żeby test wypełniać regularnie - wtedy Twoja ocena ryzyka
          będzie aktualna.
        </h4>
      </div>
      <FieldSet>
        <Button
          onClick={onSave}
          text="Ok, wyświetl wynik"
          type="primary"
        />
      </FieldSet>
    </Container>
  </div>
);

Summary.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default Summary;
