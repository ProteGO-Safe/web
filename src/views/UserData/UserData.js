import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Header, Imprint } from '../../components';
import Routes from '../../routes';
import { BottomNavigation } from '../../components/BottomNavigation';
import { getUserName } from '../../store/selectors/user';
import useSupportExposureNotificationTracing from '../../hooks/useSupportExposureNotificationTracing';

import { Content, Container, View } from '../../theme/grid';
import { Name, Paragraph } from '../../theme/typography';
import { ButtonWrapper } from './UserData.styled';
import './UserData.scss';

const UserData = () => {
  const history = useHistory();
  const userName = useSelector(getUserName);
  const { areEnableAllServices } = useSupportExposureNotificationTracing();
  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Name>{userName},</Name>
          <Paragraph>
            Poniżej znajdują się informacje, które podałaś/podałeś. Aplikacja
            przechowuje je tylko w pamięci Twojego telefonu. W dowolnej chwili
            możesz je edytować lub usunąć. Jeśli korzystasz z funkcji
            powiadamiana o narażeniu na koronawirusa, znajdziesz tutaj także
            miejsce na podanie numeru PIN.
          </Paragraph>
          <Imprint />
          <ButtonWrapper>
            <Button
              onClick={() => history.push(Routes.UserDataSettings)}
              text="Zarządzaj danymi"
            />
            <Button
              onClick={() => history.push(Routes.UserDataChange)}
              type="secondary"
              text="Aktualizuj Metrykę Zdrowia"
            />
          </ButtonWrapper>
          {areEnableAllServices && (
            <ButtonWrapper>
              <Button
                onClick={() => history.push(Routes.UploadHistoricalData)}
                type="secondary"
                text="Przekaż dane"
              />
            </ButtonWrapper>
          )}
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

export default UserData;
