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
            to darmowa aplikacja, dzięki której możesz oceniać ryzyko infekcji
            koronawirusem na podstawie wytycznych{' '}
            <strong>Światowej Organizacji Zdrowia (WHO)</strong>, prowadzić
            dziennik stanu zdrowia oraz lepiej poznać profilaktykę. Obserwując
            wyniki oraz stosując środki zaradcze minimalizujesz ryzyko
            zachorowania na COVID-19. Aplikacja umożliwi Ci trzymać rękę na
            pulsie! Jakie są jej funkcje?
          </p>
          <ul>
            <li>
              <strong>Test Oceny Ryzyka</strong> opracowaną przez firmę
              Infermedica na bazie wytycznych Światowej Organizacji Zdrowia
              (WHO). Dzięki niej łatwiej jest podjąć odpowiednie decyzje dot.
              dalszych kroków działania w przypadku podejrzenia infekcji.
            </li>
            <li>
              <strong>Mój dziennik zdrowia</strong> – ułatwimy Ci prowadzenie
              codziennych zapisków o stanie zdrowia, dzięki czemu będziesz w
              stanie lepiej obserwować i dokumentować objawy.
            </li>
            <li>
              <strong>Profilaktyka</strong> – otrzymasz wskazówki gdzie szukać
              pomocy specjalistycznej i o czym pamiętać.
            </li>
            <li>
              <strong>Dokumentacja dla personelu medycznego</strong> –
              informacje o rozwoju objawów, podanych schorzeniach pozwolą
              lekarzom na szybszą diagnozę.
            </li>
            <li>
              <strong>* Komunikacja z użytkownikiem</strong> – wysyłanie
              zweryfikowanych wiadomości od WHO i Ministerstwa Zdrowia.
            </li>
            <li>
              * Budowanie <strong>BIG DATA</strong> i modelowanie scenariuszy
              zakażeń oraz lokalizowanie ognisk zakażeń.
            </li>
          </ul>
          <p>
            Każdy z nas może zminimalizować ryzyko infekcji stosując się do
            wytycznych profilaktyki zdrowia w myśl zasady, że im więcej wiesz,
            tym lepiej je chronisz!
          </p>
          <p>
            Pamiętaj! Tylko codzienne, odpowiedzialne decyzje i środki zaradcze
            przybliżają nas do zahamowania rozprzestrzeniania się wirusa
            SARS-CoV-2 i powrotu do normalności.
          </p>
          <p>
            Prowadzenie dziennika i regularna ocena stanu zdrowia jest bardzo
            prosta i nie angażuje wiele czasu – wystarczy Ci mniej niż 15 min
            dziennie.
          </p>
          <p>Zacznij od dziś – zadbaj o siebie i swoich bliskich.</p>
          <p>Masz pytania? Przejdź do Pomocy i najczęstszych pytań *</p>
          <p>* w przygotowaniu</p>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default HowItWorks;
