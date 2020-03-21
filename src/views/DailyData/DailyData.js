import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import Background from '../../assets/img/banners/banner-1.png';
import {
  Back,
  Banner,
  Brand,
  Button,
  Container,
  FieldSet,
  User
} from '../../components';

import { Form } from './components';
import './DailyData.scss';

const DailyData = ({ onBack, isViewMode }) => {
  const { dirty, submitForm } = useFormikContext();

  return (
    <div className="view view__data">
      <Banner background={Background}>
        <Back onClick={onBack} />
        <Brand content={false} small white />
      </Banner>
      <Container className="container__content">
        <h4 className="h1 text-center medium">Dziennik</h4>
        <div className="date text-center">
          <h4>{isViewMode ? 'Świetna robota!' : 'Uzupełnij dane za dzień'}</h4>
          {isViewMode ? (
            <p>Już odpowiedziałeś na ankietę w tym dniu</p>
          ) : (
            <h4 className="primary-1">środa 18-03-2020</h4>
          )}
          {isViewMode && <h4 className="primary-1">Podsumujmy:</h4>}
        </div>
        <User />
        <Form isViewMode={isViewMode} />
      </Container>
      <Container className="container__footer">
        <FieldSet>
          <Button
            onClick={!dirty || isViewMode ? onBack : submitForm}
            text={!dirty || isViewMode ? 'Powrót' : 'Zapisz'}
            type="primary"
          />
        </FieldSet>
      </Container>
    </div>
  );
};

DailyData.propTypes = {
  isViewMode: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired
};

export default DailyData;
