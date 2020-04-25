import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';

import { Button, Imprint } from '../../components';
import { Data, Form } from './components';
import './DailyData.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { Content, Container, View } from '../../theme/grid';
import { Title } from '../../theme/typography';
import Routes from '../../routes';

const DailyData = ({ isViewMode }) => {
  const { dirty, submitForm } = useFormikContext();
  const history = useHistory();

  return (
    <View>
      <Header />
      <Content>
        <Container className="container__content">
          <Title>Dziennik zdrowia</Title>
          {isViewMode ? <Data /> : <Form />}
          <Title className="medium title-4 text-left">Metryka</Title>
          <Imprint hidePhoneNumber />
          <Actions>
            {isViewMode ? (
              <Button
                onClick={() => history.push( Routes.Daily)}
                text="Powrót"
                type="primary"
              />
            ) : (
              <Button
                onClick={submitForm}
                text="Zapisz"
                type="primary"
                disabled={!dirty}
              />
            )}
          </Actions>
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

DailyData.propTypes = {
  isViewMode: PropTypes.bool.isRequired
};

export default DailyData;
