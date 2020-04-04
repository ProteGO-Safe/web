import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { Banner, Brand, Button, FieldSet } from '../../components';
import Background from '../../assets/img/banners/banner-1.png';
import './InstallApp.scss';
import { ANDROID, IOS } from '../../constants';

const InstallApp = () => {
  const history = useHistory();
  const location = useLocation();

  if (!location.state || !location.state.system) {
    return <Redirect to="/" />;
  }

  const { system } = location.state;

  const handleClick = () => {
    switch (system) {
      case IOS:
        history.push('/install/ios');
        break;
      case ANDROID:
        history.push('/install/android');
        break;
      default:
        history.push('/');
    }
  };

  return (
    <div className="view view__install-app">
      <Banner background={Background} />
      <Container>
        <Brand content={false} />
        <div className="content">
          <h5 className="title text-center medium">Cześć,</h5>
          <p className="p1 text-center medium text-bold">
            Ciężko pracowaliśmy, żeby aplikację udało się ściągnąć ze sklepów
            Android i iOS. Bez&nbsp;wsparcia ministerstwa jest to niemożliwe.
            Dlatego aplikację należy zainstalować z przeglądarki.
          </p>
          <h4 className="text-center medium-2">
            Tylko tak można z niej korzystać.
          </h4>
        </div>
        <FieldSet>
          <Button onClick={handleClick} text="Zainstaluj" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default InstallApp;
