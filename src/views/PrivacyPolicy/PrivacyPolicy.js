import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import {
  Back,
  Banner,
  Brand,
  Button,
  Container,
  FieldSet
} from '../../components';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  const history = useHistory();

  return (
    <div className="view view__privacy-policy">
      <Banner background={Background}>
        <Back onClick={() => history.push('/')} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <h4 className="medium">Polityka prywatności</h4>
        <div className="content">
          <p className="p1 small text-bold">Privacy by Design & Privacy by Default</p>
          <p className="p1 small">
            Chcemy przeciwdziałać Koronawirusowi, ale nie za wszelką cenę. Twoja
            prywatność jest dla nas równie ważna. Wszystkie informacje dotyczące
            Twojego stanu zdrowia, które przekazujesz do SafeSafe są zapisywane
            w postaci plików cookies i pozostają na Twoim urządzeniu. Nie mamy
            do nich wglądu. Widzimy tylko ID Twojego urządzenia, Twoje imię,
            wiek, a w przyszłości być może Twoją lokalizację. Jeśli będziemy
            planowali zmiany, poinformujemy Cię o tym i poprosimy o Twoją zgodę
            przed wprowadzeniem zmian. Szczegóły dotyczące SafeSafe i tego jak
            przetwarzamy Twoje dane znajdziesz w naszym Regulaminie i Polityce
            Prywatności.
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
          <Button onClick={() => null} type="secondary" text="RODO" />
          <Button onClick={() => null} type="secondary" text="Moje dane" />
          <Button onClick={() => null} type="secondary" text="Bezpieczeństwo" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
