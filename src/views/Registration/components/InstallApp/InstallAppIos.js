import React from 'react';
import Background from '../../../../assets/img/banners/banner-1.png';
import {
  Banner,
  Brand,
  Button,
  Container,
  FieldSet
} from '../../../../components';
import Img1 from '../../../../assets/img/icons/expotr-icon.svg';

const InstallAppAndroid = ({ onLeave }) => (
  <div className="view view__install-app">
    <Banner background={Background}>
      <Brand content={false} small white />
    </Banner>
    <Container>
      <h4 className="h1 text-center medium">
        Zainstaluj aplikację na swoim iPhonie
      </h4>
      <div className="content">
        <p className="small text-center">
          W ten sposób uzyskasz łatwy dostęp
          <br />
          do aplikacji z głównego ekranu telefonu.
        </p>
      </div>
      <div className="instruction instruction__ios">
        <div />
        <div>
          <img src={Img1} alt="Krok 1" />
          <p>
            Odszukaj poniżej symbol <span>"udostępnij"</span> i znajdź pozycję{' '}
            <span>"Do ekranu początkowego"</span>
          </p>
        </div>
        <div />
      </div>
      <FieldSet>
        <Button onClick={onLeave} text="Gotowe" type="primary" />
        <Button onClick={onLeave} text="pomiń" type="blank" />
      </FieldSet>
    </Container>
  </div>
);

export default InstallAppAndroid;
