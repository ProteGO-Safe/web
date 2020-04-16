import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { Button, Container, FieldSet, Imprint } from '../../components';
import { Form } from './components';
import './DailyData.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const DailyData = ({ isViewMode }) => {
  const { dirty, submitForm } = useFormikContext();

  return (
    <div className="view view__data">
      <Header />
      <Container className="container__content">
        <h4 className="title medium">Dziennik zdrowia</h4>
        <Form isViewMode={isViewMode} />
        <h4 className="metrics">Metryka</h4>
        <Imprint />
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
      <BottomNavigation />
    </div>
  );
};

DailyData.propTypes = {
  isViewMode: PropTypes.bool.isRequired
};

export default DailyData;
