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
          <p className="p1 small">
            Wszystkie dane ktore przekazujesz do aplikacji sa anonimizowane -
            nikt - nawet tworcy aplikacji, nie maja mozliwosci do nich wgladu.
            Zeby walczyc z epidemia musimy budowac baze danych - dlatego
            swtorzylismy ta aplikacje.
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
