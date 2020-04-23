import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { Container, Content, View } from '../../theme/grid';
import { Title } from './IAmSick.styled';
import { ListNumber, ListNumberItem } from '../../theme/typography';

const Complete = () => {
  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>
            Samoobserwacja - pozostań w domu i monitoruj stan zdrowia
          </Title>
          <ListNumber>
            <ListNumberItem>
              <span className="primary-2"><strong>Zostań w domu</strong></span> i monitoruj stan
              swojego zdrowia. Zadzwoń na infolinię Narodowego Funduszu zdrowia
              800 190 590 lub do lokalnej placówki służby zdrowia. Ważne! Nie
              idź tam.
            </ListNumberItem>
            <ListNumberItem>
              Do minimum <strong>ogranicz kontakt</strong> z innymi ludźmi.
            </ListNumberItem>
            <ListNumberItem>
              <strong>Minimum raz dziennie</strong> uzupełniaj zakładkę{' '}
              <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link>: zapisuj w aplikacji
              objawy i temperaturę ciała.
            </ListNumberItem>
            <ListNumberItem>
              Ściśle przestrzegaj <strong>zasad higieny</strong>, podczas kaszlu
              i kichania - zasłaniaj usta i nos. Często i dokładnie myj ręce.
            </ListNumberItem>
            <ListNumberItem>
              Jeżeli pojawią się nowe objawy infekcji lub nasilą się
              dotychczasowe, ponów kontakt z infolinią NFZ 800 190 590 lub{' '}
              <strong>zadzwoń (nie idź!)</strong> do lokalnej placówki służby
              zdrowia.
            </ListNumberItem>
          </ListNumber>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default Complete;
