import React from 'react';
import { useHistory } from 'react-router-dom';

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
import { useFormikContext } from 'formik';

const DailyData = () => {
  const history = useHistory();

  const handleBack = () => history.push('/daily');

  const { dirty } = useFormikContext();

  return (
    <div className="view view__data">
      <Banner background={Background}>
        <Back onClick={handleBack} />
        <Brand content={false} small white />
      </Banner>
      <Container className="container__content">
        <h4 className="h1 text-center medium">Dziennik</h4>
        <div className="date text-center">
          <h4>Uzupełnij dane za dzień</h4>
          <h4 className="primary-1">środa 18-03-2020</h4>
        </div>
        <User />
        <Form />
      </Container>
      <Container className="container__footer">
        <FieldSet>
          <Button
            onClick={!dirty ? () => null : () => null}
            text={!dirty ? 'Powrót' : 'Zapisz'}
            type="primary"
          />
        </FieldSet>
      </Container>
    </div>
  );
};

export default DailyData;
