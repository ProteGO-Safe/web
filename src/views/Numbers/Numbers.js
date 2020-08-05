import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import Routes from '../../routes';
import {
  BottomNavigation,
  Button,
  Header,
  LineItem,
  PhoneNumber
} from '../../components';
import { Info, Phone, Line } from './Numbers.styled';
import { Container, Content, View } from '../../theme/grid';

const Numbers = ({ t }) => {
  const history = useHistory();

  const goToHospitalsList = () => history.push(Routes.HospitalsList);

  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Info>{t('numbers_text1')}</Info>
          <PhoneNumber value="800190590">
            <Button
              onClick={() => null}
              className="small"
              label={t('numbers_text2')}
              type="border"
              icon={<Phone />}
            />
          </PhoneNumber>
          <LineItem onClick={goToHospitalsList} text={t('numbers_text3')} />
          <Line />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default withTranslation()(Numbers);
