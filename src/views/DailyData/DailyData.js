import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';

import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Button, Imprint } from '../../components';
import { Data, Form } from './components';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { Content, Container, View } from '../../theme/grid';
import { Title, TitleBox } from './DailyData.styled';
import './DailyData.scss';

const DailyData = ({ isViewMode }) => {
  const { dirty, submitForm } = useFormikContext();
  const history = useHistory();

  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>Dziennik zdrowia</Title>
          {isViewMode ? <Data /> : <Form />}
          <TitleBox className="medium title-4 text-left">Metryka</TitleBox>
          <Imprint />
          <Actions>
            {isViewMode ? (
              <Button
                onClick={() => history.push(Routes.Daily)}
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
        <BottomNavigation />
      </Content>
    </View>
  );
};

DailyData.propTypes = {
  isViewMode: PropTypes.bool.isRequired
};

export default DailyData;
