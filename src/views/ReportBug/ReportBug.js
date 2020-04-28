import React from 'react';

import { Header } from '../../components/Header';
import { Container, Content } from './ReportBug.styled';
import { BottomNavigation } from '../../components/BottomNavigation';

import { Paragraph } from '../../theme/typography';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import Email from '../../components/Email';
import Url from '../../components/Url';

const ReportBug = () => {
  return (
    <Container>
      <Header />
      <Content>
        ProteGO Safe to darmowa aplikacja, dzięki której możesz oceniać ryzyko
        infekcji koronawirusem na podstawie wytycznych Światowej Organizacji
        Zdrowia (WHO), prowadzić dziennik stanu zdrowia oraz lepiej poznać
        profilaktykę. Obserwując wyniki oraz stosując środki zaradcze
        minimalizujesz ryzyko zachorowania na{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
        <br />
        <br />
        Masz pytania? Znalazłeś błąd? Skontaktuj się z nami!
        <br />
        <br />
      </Content>
      <Paragraph color={Color.primary} fontWeight={FontWeight.Bold}>
        <Email>info@safesafe.app</Email>
      </Paragraph>
      <BottomNavigation />
    </Container>
  );
};

ReportBug.propTypes = {};

export default ReportBug;
