import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, FieldSet } from '../../components';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import Routes from '../../routes';
import { Content, Title } from './PrivacyPolicy.styled';
import { Paragraph } from '../../theme/typography';
import { Container, View } from '../../theme/grid';

const PrivacyPolicy = () => {
  const history = useHistory();
  return (
    <View>
      <Header />
      <Container>
        <Content>
          <Title>Regulamin i Polityka prywatności.</Title>
          <Paragraph>
            Wspólnie chcemy przeciwdziałać Koronawirusowi. Twoja prywatność jest
            dla nas tak samo ważna. Aplikację zaprojektowaliśmy tak, aby
            wszystkie informacje które przekazujesz do ProteGO Safe
            uniemożliwiały Twoją identyfikację. Dlatego nie musisz rejestrować
            konta, nie prosimy Cię o adres e-mail, ani połączenie ProteGO Safe z
            kontem w mediach społecznościowych.
          </Paragraph>
          <Paragraph>
            Jeżeli będziemy planowali zmiany, poinformujemy Cię o tym. Z
            większości nowych funkcjonalności będziesz mógł korzystać na
            zasadzie opt-in. Oznacza to, że możesz dobrowolnie skorzystać z
            nowej funkcjonalności lub nie korzystać z niej. Szczegóły dotyczące
            aplikacji ProteGO Safe znajdziesz w Regulaminie, a informacje
            dotyczące przetwarzania Twoich danych znajdziesz w Polityce
            prywatności.
          </Paragraph>
          <Paragraph>Poniżej możesz zapoznać się ze szczegółami:</Paragraph>
        </Content>
        <FieldSet>
          <Button
            onClick={() => history.push(Routes.Regulations)}
            type="primary"
            text="Regulamin"
          />
          <Button
            onClick={() => history.push(Routes.PrivacyPolicyDetails)}
            type="primary"
            text="Polityka prywatności"
          />
          <Button
            onClick={() => history.push(Routes.UserData)}
            type="secondary"
            text="Dane"
          />
        </FieldSet>
      </Container>
      <BottomNavigation />
    </View>
  );
};

export default PrivacyPolicy;
