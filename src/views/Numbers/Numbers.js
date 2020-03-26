import React from 'react';
import Background from '../../assets/img/banners/banner-1.png';
import { Container } from '../../components';
import { Header } from '../components';
import './Numbers.scss';

const Numbers = () => (
  <div className="view view__numbers">
    <Header background={Background} prevUrl="/" />
    <Container>
      <h4 className="h1 text-center medium">Numery alarmowe</h4>
      <div className="content">
        <div className="address">
          <p className="p1 text-bold">Czuję się źle, gdzie szukać porady?</p>
          <p className="p1 answer">
            Skontaktuj się telefonicznie z lekarzem rodzinnym lub lokalnym
            ośrodkiem zdrowia. Postępuj zgodnie z zaleceniami lekarza
          </p>
          <p className="p1 text-bold">
            Podejrzewam, że mogę być chory na Koronowirusa, gdzie dzwonić?
          </p>
          <p className="p1 answer">
            <a className="phone" href="tel:800190590">
              800 190 590
            </a>{' '}
            dzwoń na Infolinię rządową. Jeżeli nie uda Ci się dodzwonić{' '}
            <span className="text-bold">
              skontaktuj się telefonicznie (jeżeli zdrowie na to pozwala - dzwoń
              nie idź osobiście)
            </span>{' '}
            z najbliższym szpitalem zakaźnym, listę szpitali znajdziesz tutaj:{' '}
            <a
              href="https://www.gov.pl/web/koronawirus/lista-szpitali"
              target="_blank"
            >
              https://www.gov.pl/web/koronawirus/lista-szpitali
            </a>
          </p>
          <p className="p1 text-bold">Stan zagrożenia życia, gdzie dzwonić?</p>
          <p className="p1 answer">
            <a className="phone" href="tel:112">
              112
            </a>{' '}
            - telefon ratunkowy ratujący życie
          </p>
        </div>
      </div>
    </Container>
  </div>
);

export default Numbers;
