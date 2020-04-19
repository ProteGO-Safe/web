import React from 'react';

import { Container } from '../../components';
import './HowItWorks.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const HowItWorks = () => {
  return (
    <div className="view view__regulations">
      <Header />
      <Container>
        <h4 className="text-center medium">Jak to działa</h4>
        <div className="content">
          <p>
            <span className="primary-2">
              <strong>ProteGO Safe</strong>
            </span>{' '}
            to darmowa, oficjalna i bezpieczna aplikacja, dzięki której - na
            podstawie wytycznych{' '}
            <strong>Światowej Organizacji Zdrowia (WHO)</strong> - możesz
            oceniać ryzyko infekcji koronawirusem, prowadzić dziennik stanu
            zdrowia oraz dowiedzieć się jak unikać zakażenia. Obserwując wyniki
            oraz stosując środki zaradcze minimalizujesz ryzyko zachorowania.
            Dzięki aplikacji trzymasz rękę na pulsie - dbasz o swoje i swoich
            bliskich zdrowie. Oto jej funkcje:
          </p>
          <ul>
            <li>
              <strong>Test Oceny Ryzyka</strong> - opracowaliśmy go na bazie
              wytycznych Światowej Organizacji Zdrowia (WHO). Dzięki niemu m.in.
              dowiesz się jak dbać o swoje zdrowie i jak działać w przypadku
              podejrzenia zakażenia.
            </li>
            <li>
              <strong>Mój dziennik zdrowia</strong> – ułatwia prowadzenie
              codziennych zapisków o stanie zdrowia, dzięki czemu będziesz w
              stanie lepiej obserwować i dokumentować objawy.
            </li>
            <li>
              <strong>Profilaktyka</strong> – wskazówki, gdzie - w razie
              potrzeby - szukać specjalistycznej pomocy, aktualne informacje i
              zalecenia.
            </li>
            <li>
              <strong>Pomoc w diagnozie</strong> - regularnie uzupełniane przez
              Ciebie infomacje - w razie konieczności - pomogą lekarzom wystawić
              diagnozę. Tylko oni mogą to zrobić.
              <strong>Ważne! Test Oceny Ryzyka NIE jest diagnozą.</strong>
            </li>
            <li>
              <strong>* Komunikacja z użytkownikiem</strong> – wysyłanie
              zweryfikowanych wiadomości od WHO i Ministerstwa Zdrowia.
            </li>
          </ul>
          <p>
            To od naszej postawy zależy, jak szybko pokonamy koronawirusa i
            wrócimy do normalnego życia. Korzystaj z naszej aplikacji, stosuj
            się do wytycznych!
          </p>
          <p>
            Prowadzenie dziennika zdrowia jest bardzo proste i nie zajmuje wiele
            czasu.
            <br />
            Zacznij od dziś – zadbaj o siebie i swoich bliskich.
          </p>
          <p>
            Masz pytania? Przejdź do zakładki Pomoc. Znajdziesz tam odpowiedzi
            na najczęściej pojawiąjące się pytania dotyczące działania naszej
            aplikacji *
          </p>
          <small>* w przygotowaniu</small>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default HowItWorks;
