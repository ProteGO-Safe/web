import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import Background from '../../assets/img/banners/banner-1.png';
import { Button, Container, FieldSet } from '../../components';
import { Header } from '../components';
import { Form } from './components';
import './DailyData.scss';

const DailyData = ({ date, onBack, isViewMode }) => {
  const { dirty, submitForm } = useFormikContext();

  return (
    <div className="view view__data">
      <Header background={Background} prevUrl="/daily" />
      <Container className="container__content">
        <h4 className="title medium">Dziennik zdrowia</h4>
        <p className="date medium">{date}</p>
        <Form isViewMode={isViewMode} />
      </Container>
      <div className="footer">
        <Container className="container__footer">
          <FieldSet>
            <Button
              onClick={submitForm}
              text="Zapisz"
              type="primary"
              disabled={!dirty}
            />
          </FieldSet>
        </Container>
      </div>
    </div>
  );
};

DailyData.propTypes = {
  isViewMode: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired
};

export default DailyData;
