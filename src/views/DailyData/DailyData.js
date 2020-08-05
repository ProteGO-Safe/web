import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';

import Routes from '../../routes';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Button, Header, Imprint } from '../../components';
import { Data, Form } from './components';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { Content, Container, View } from '../../theme/grid';
import { Title, TitleBox } from './DailyData.styled';
import './DailyData.scss';

const DailyData = ({ t, isViewMode }) => {
  const { dirty, submitForm } = useFormikContext();
  const history = useHistory();

  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>{t('daily_data_text1')}</Title>
          {isViewMode ? <Data /> : <Form />}
          <TitleBox className="medium title-4 text-left">
            {t('daily_data_text2')}
          </TitleBox>
          <Imprint />
          <Actions>
            {isViewMode ? (
              <Button
                onClick={() => history.push(Routes.Daily)}
                label={t('button_back')}
              />
            ) : (
              <Button
                onClick={submitForm}
                label={t('button_save')}
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

export default withTranslation()(DailyData);
