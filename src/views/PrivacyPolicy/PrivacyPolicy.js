import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, FieldSet } from '../../components';
import './PrivacyPolicy.scss';
import Routes from '../../routes';
import Header from '../../components/Header/Header';

const PrivacyPolicy = () => {
  const history = useHistory();

  return (
    <div className="view view__privacy-policy">
      <Header onBackClick={() => history.push(Routes.Home)} />
      <Container>
        <h4 className="medium">Polityka prywatności</h4>
        <div className="content">
          <p className="p1 small text-bold">
            Privacy by Design & Privacy by Default
          </p>
          <p className="p1 small">
            Wspólnie chcemy przeciwdziałać Koronawirusowi. Twoja prywatność jest
            dla nas tak samo ważna. Aplikację zaprojektowaliśmy tak, aby
            wszystkie informacje, które przekazujesz do SafeSafe uniemożliwiały
            Twoją identyfikację. Dlatego nie musisz rejestrować konta, nie
            prosimy Cię o adres e-mail, ani połączenie SafeSafe z kontem w
            mediach społecznościowych.
          </p>
          <p className="p1 small">
            Jeśli będziemy planowali zmiany, poinformujemy Cię o tym i poprosimy
            o Twoją zgodę. Możemy udostępnić część informacji, które wprowadzisz
            do aplikacji naszym partnerom w celu przeciwdziałania
            koronawirusowi. Szczegóły dotyczące SafeSafe i tego jak przetwarzamy
            Twoje dane znajdziesz w naszym Regulaminie i Polityce Prywatności.
          </p>
          <p className="p2 small text-center">
            Poniżej możesz zapoznać się ze szczegółami:
          </p>
        </div>
        <FieldSet>
          <Button
            onClick={() => history.push('/regulations')}
            type="secondary"
            text="Regulamin"
          />
          <Button
            onClick={() => history.push('/privacy-policy-details')}
            type="secondary"
            text="Polityka prywatności"
          />
          <Button
            onClick={() => history.push('/user-data')}
            type="secondary"
            text="Dane"
          />
        </FieldSet>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
