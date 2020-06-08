import React from 'react';

import { BottomNavigation, Email, Header, Url } from '../../components';

import { Container, Content, View } from '../../theme/grid';
import { Title } from './ReportBug.styled';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import { Paragraph } from '../../theme/typography';

const ReportBug = () => {
  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>Zgłoś błąd</Title>
          <Paragraph>
            ProteGO Safe to darmowa aplikacja, dzięki której możesz oceniać
            ryzyko infekcji koronawirusem na podstawie wytycznych Światowej
            Organizacji Zdrowia (WHO), prowadzić dziennik stanu zdrowia oraz
            lepiej poznać profilaktykę. Obserwując wyniki oraz stosując środki
            zaradcze minimalizujesz ryzyko zachorowania na{' '}
            <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
          </Paragraph>
          <Paragraph>
            Masz pytania? Znalazłeś błąd? Skontaktuj się z nami!
          </Paragraph>
          <Paragraph color={Color.primary} fontWeight={FontWeight.Bold}>
            <Email>info@safesafe.app</Email>
          </Paragraph>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default ReportBug;
