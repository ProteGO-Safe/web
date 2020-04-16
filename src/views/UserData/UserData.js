import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Imprint } from '../../components';
import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

import { Content, Container, View } from '../../theme/grid';
import { Actions } from '../Registration/Registration.styled';
import { Paragraph, Title } from '../../theme/typography';

const UserData = () => {
  const history = useHistory();
  const userName = useSelector(state => state.user.name);

  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>Moje dane</Title>
          <Paragraph>
            <strong>{userName}</strong>
          </Paragraph>
          <Paragraph>
            Poniżej znajdują się dane, które podałeś w trakcie rejestracji
            swojego konta.
          </Paragraph>
          <Imprint hidePhoneNumber />
          <Actions>
            <Button
              onClick={() => history.push(Routes.UserDataSettings)}
              text="Zarządzaj danymi"
            />
            <Button
              onClick={() => history.push(Routes.UserData)}
              disabled
              type="secondary"
              text="Zmień dane"
            />
          </Actions>
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

export default UserData;
