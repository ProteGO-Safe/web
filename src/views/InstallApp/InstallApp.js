import React from 'react';
import Container from '../../components/Container/Container';
import { Brand } from '../../components/Brand';
import Background from '../../assets/img/banners/banner-1.png';
import { Banner } from '../../components/Banner';
import './InstallApp.scss';

const InstallApp = () => {
  return (
    <div className="view view__install-app">
      <Banner background={Background} />
      <Container>
        <Brand content={false} />
        <p className="top text-center medium">Cześć,</p>
        <p className="text-center medium">
          Ciężko pracowaliśmy, żeby aplikację udało się ściągnąć ze sklepów
          Android i iOS. Bez wsparcia ministerstwa jest to nie możliwe. Dlatego
          aplikację należy zainstalować z przeglądarki.
        </p>
        <p className="text-center medium">Tylko tak można z niej korzystać.</p>

      </Container>
    </div>
  );
};

export default InstallApp;
