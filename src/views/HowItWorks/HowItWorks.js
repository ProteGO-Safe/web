import React from 'react';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container, Content, View } from '../../theme/grid';
import { List, ListItem, Paragraph, SmallText } from '../../theme/typography';
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
            aplikacja, dzięki której - na podstawie wytycznych{' '}
            <strong>Światowej Organizacji Zdrowia (WHO)</strong> - możesz
            oceniać ryzyko infekcji koronawirusem, prowadzić dziennik stanu
            zdrowia oraz dowiedzieć się jak unikać zakażenia. Obserwując wyniki
            oraz stosując środki zaradcze minimalizujesz ryzyko zachorowania.
            Dzięki aplikacji trzymasz rękę na pulsie - dbasz o swoje i swoich
            bliskich zdrowie. Oto jej funkcje:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Test Oceny Ryzyka</strong> - opracowaliśmy go na bazie
              wytycznych Światowej Organizacji Zdrowia (WHO). Dzięki niemu m.in.
              dowiesz się jak dbać o swoje zdrowie i jak działać w przypadku
              podejrzenia zakażenia.
            </ListItem>
            <ListItem>
              <strong>Mój dziennik zdrowia</strong> – ułatwia prowadzenie
              codziennych zapisków o stanie zdrowia, dzięki czemu będziesz w
              stanie lepiej obserwować i dokumentować objawy.
            </ListItem>
            <ListItem>
              <strong>Profilaktyka</strong> – wskazówki, gdzie - w razie
              potrzeby - szukać specjalistycznej pomocy, aktualne informacje i
              zalecenia.
            </ListItem>
            <ListItem>
              <strong>Pomoc w diagnozie</strong> - regularnie uzupełniane przez
              Ciebie infomacje - w razie konieczności - pomogą lekarzom wystawić
              diagnozę. Tylko oni mogą to zrobić.{' '}
              <strong>Ważne! Test Oceny Ryzyka NIE jest diagnozą.</strong>
            </ListItem>
            <ListItem>
              <strong>* Komunikacja z użytkownikiem</strong> – wysyłanie
              zweryfikowanych wiadomości od WHO i Ministerstwa Zdrowia.
            </ListItem>
          </List>
          <Paragraph>
            To od naszej postawy zależy, jak szybko pokonamy koronawirusa i
            wrócimy do normalnego życia. Korzystaj z naszej aplikacji, stosuj
            się do wytycznych!
          </Paragraph>
          <Paragraph>
            Prowadzenie dziennika zdrowia jest bardzo proste i nie zajmuje wiele
            czasu.
            <br />
            Zacznij od dziś – zadbaj o siebie i swoich bliskich.
          </Paragraph>
          <Paragraph>
            Masz pytania? Przejdź do zakładki Pomoc. Znajdziesz tam odpowiedzi
            na najczęściej pojawiąjące się pytania dotyczące działania naszej
            aplikacji *
          </Paragraph>
          <SmallText>* w przygotowaniu</SmallText>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default HowItWorks;
