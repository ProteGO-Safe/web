import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../components';
import './Regulations.scss';

const Regulations = () => {
  const history = useHistory();

  return (
    <div className="view view__regulations">
      <Banner background={Background}>
        <Back onClick={() => history.push('/privacy-policy')} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <p className="p2 small text-center">Polityka prywatności</p>
        <h4 className="text-center">Regulamin</h4>
        <div className="content">
          <p className="p1 small">
            Wszystkie dane ktore przekazujesz do aplikacji sa anonimizowane -
            nikt - nawet tworcy aplikacji, nie maja mozliwosci do nich wgladu.
            Zeby walczyc z epidemia musimy budowac baze danych - dlatego
            swtorzylismy ta aplikacje.Wszystkie dane ktore przekazujesz do
            aplikacji sa anonimizowane - nikt - nawet tworcy aplikacji, nie maja
            mozliwosci do nich wgladu. Zeby walczyc z epidemia musimy budowac
            baze danych - dlatego swtorzylismy ta aplikacje.Wszystkie dane ktore
            przekazujesz do aplikacji sa anonimizowane - nikt - nawet tworcy
            aplikacji, nie maja mozliwosci do nich wgladu. Zeby walczyc z
            epidemia musimy budowac baze danych - dlatego swtorzylismy ta
            aplikacje.Wszystkie dane ktore przekazujesz do aplikacji sa
            anonimizowane - nikt - nawet tworcy aplikacji, nie maja mozliwosci
            do nich wgladu. Zeby walczyc z epidemia musimy budowac baze danych -
            dlatego swtorzylismy ta aplikacje.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Regulations;
