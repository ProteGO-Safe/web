import React from 'react';
import { Container } from '../../components';
import './Help.scss';

const Help = () => {
  return (
    <Container>
      <div className="content">
        <h3>Pomoc</h3>
        <p>
          SafeSafe to darmowa aplikacja, dzięki której możesz oceniać ryzyko infekcji koronawirusem na podstawie
          wytycznych Światowej Organizacji Zdrowia (WHO), prowadzić dziennik stanu zdrowia oraz lepiej poznać
          profilaktykę. Obserwując wyniki oraz stosując środki zaradcze minimalizujesz ryzyko zachorowania na COVID-19.
          <br /><br />
          Masz pytania? Znalazłeś błąd? Skontaktuj się z nami!
          <br /><br />
          <b>info@safesafe.app</b>
        </p>
      </div>
    </Container>
  );
};

export default Help;
