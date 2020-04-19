import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, FieldSet } from '../../components';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import Routes from '../../routes';
import { Content } from './PrivacyPolicy.styled';
import { Color } from '../../theme/colors';
import { Paragraph, H4, H5 } from '../../theme/typography';
import { Container, View } from '../../theme/grid';

const PrivacyPolicy = () => {
  const history = useHistory();
  return (
    <View>
      <Header />
      <Container>
        <Content>
          <H4 color={Color.black}>Polityka prywatności</H4>
          <H5>Privacy by Design & Privacy by Default</H5>
          <Paragraph>
            Wspólnie chcemy przeciwdziałać Koronawirusowi. Twoja prywatność jest
            dla nas tak samo ważna. Aplikację zaprojektowaliśmy tak, aby
            wszystkie informacje, które przekazujesz do ProteGO Safe uniemożliwiały
            Twoją identyfikację. Dlatego nie musisz rejestrować konta, nie
            prosimy Cię o adres e-mail, ani połączenie ProteGO Safe z kontem w
            mediach społecznościowych.
          </Paragraph>
          <Paragraph>
            Jeśli będziemy planowali zmiany, poinformujemy Cię o tym i poprosimy
            o Twoją zgodę. Możemy udostępnić część informacji, które wprowadzisz
            do aplikacji naszym partnerom w celu przeciwdziałania
            koronawirusowi. Szczegóły dotyczące ProteGO Safe i tego jak przetwarzamy
            Twoje dane znajdziesz w naszym Regulaminie i Polityce Prywatności.
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
