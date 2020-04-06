import React from 'react';

import { Header } from '../../components/Header';
import { Container, Content, Email } from './ReportBug.styled';

const ReportBug = () => {
  return (
    <Container>
      <Header />
      <Content>
        SafeSafe to darmowa aplikacja, dzięki której możesz oceniać ryzyko
        infekcji koronawirusem na podstawie wytycznych Światowej Organizacji
        Zdrowia (WHO), prowadzić dziennik stanu zdrowia oraz lepiej poznać
        profilaktykę. Obserwując wyniki oraz stosując środki zaradcze
        minimalizujesz ryzyko zachorowania na COVID-19.
        <br />
        <br />
        Masz pytania? Znalazłeś błąd? Skontaktuj się z nami!
        <br />
        <br />
        <Email href="mailto:info@safesafe.app">info@safesafe.app</Email>
      </Content>
    </Container>
  );
};

ReportBug.propTypes = {};

export default ReportBug;
