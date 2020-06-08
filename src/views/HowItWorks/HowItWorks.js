import React from 'react';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container, Content, View } from '../../theme/grid';
import { List, ListItem, Paragraph } from '../../theme/typography';
import { Title } from './HowItWorks.styled';

const HowItWorks = () => {
  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>Jak to działa?</Title>
          <Paragraph>
            <strong>ProteGO Safe</strong> to darmowa, oficjalna i bezpieczna
            aplikacja, dzięki której możesz zostać powiadamiana/y o ryzyku
            zakażenia koronawirusem. W aplikacji możesz także oceniać ryzyko
            infekcji koronawirusem, prowadzić dziennik zdrowia oraz dowiedzieć
            się jak unikać zakażenia.
          </Paragraph>
          <Paragraph>
            Obserwując wyniki oraz stosując środki zaradcze minimalizujesz
            ryzyko zachorowania.
          </Paragraph>
          <Paragraph>
            Dzięki aplikacji trzymasz rękę na pulsie - dbasz o zdrowie swoje i
            swoich bliskich.
          </Paragraph>
          <Paragraph>Oto jej funkcje:</Paragraph>
          <List>
            <ListItem>
              <strong>Powiadamianie o ryzyku zakażenia koronawirusem</strong> –
              korzystając ze wspólnych wysiłków firm Apple i Google i we
              współpracy z instytucjami zdrowia publicznego wdrożyliśmy
              rozwiązanie, które na podstawie analizy stopnia ryzyka i w oparciu
              o dane spotkanych urządzeń, umożliwia powiadomianie o kontakcie z
              osobą zakażoną.
            </ListItem>
            <ListItem>
              <strong>Test oceny ryzyka</strong> - opracowaliśmy go na bazie
              wytycznych Światowej Organizacji Zdrowia (WHO). Dzięki niemu m.in.
              dowiesz się jak dbać o swoje zdrowie i jak działać w przypadku
              podejrzenia zakażenia.
            </ListItem>
            <ListItem>
              <strong>Dziennik zdrowia</strong> – ułatwia prowadzenie
              codziennych zapisków o stanie zdrowia, w tym zapisywanie objawów.
            </ListItem>
            <ListItem>
              <strong>Profilaktyka</strong> – wskazówki, gdzie - w razie
              potrzeby - szukać specjalistycznej pomocy, aktualne informacje i
              zalecenia.
            </ListItem>
            <ListItem>
              <strong>Pomoc w diagnozie</strong> - regularnie uzupełniane przez
              Ciebie infomacje - w razie konieczności - pomogą lekarzom wystawić
              diagnozę. Tylko oni mogą to zrobić.
            </ListItem>
          </List>
          <Paragraph>
            <strong>Ważne! Test oceny ryzyka NIE jest diagnozą.</strong>
          </Paragraph>
          <Paragraph>
            * Komunikacja z użytkownikiem – wysyłanie zweryfikowanych wiadomości
            od WHO i Ministerstwa Zdrowia. To od naszej postawy zależy, jak
            szybko pokonamy koronawirusa i wrócimy do normalnego życia.
            Korzystaj z naszej aplikacji, stosuj się do wytycznych! Prowadzenie
            dziennika zdrowia jest bardzo proste i nie zajmuje wiele czasu.
            Zacznij od dziś – zadbaj o siebie i swoich bliskich.
          </Paragraph>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default HowItWorks;
