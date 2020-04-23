import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Button, FieldSet } from '../../components';
import { Container, Content, View } from '../../theme/grid';
import { Title, List, ListItem } from './AdviceInformation.styled';
import './AdviceInformation.scss';

import IconAdviceHome from '../../assets/img/icons/zostan-w-domu.svg';
import IconAdvicePhone from '../../assets/img/icons/seniorzy.svg';
import IconAdviceCountry from '../../assets/img/icons/przyjazd.svg';
import IconAdviceNote from '../../assets/img/icons/dziennik.svg';
import IconWarning from '../../assets/img/icons/warning.svg';

const AdviceInformation = () => {
  const history = useHistory();

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height tips">
          <Title>Porady</Title>
          <List>
            <ListItem>
              <img src={IconAdviceHome} alt="advice icon" />
              <p>Zostań w domu</p>
            </ListItem>
            <ListItem>
              <img src={IconAdvicePhone} alt="advice icon" />
              <p>
                Zadzwoń do rodziców i krewnych w podeszłym wieku. Pomóż im
                korzystać z ProteGo Safe na ich telefonie. Zrób dla nich zakupy.
                Unikaj kontaktu osobistego.
              </p>
            </ListItem>
            <ListItem>
              <img src={IconAdviceCountry} alt="advice icon" />
              <p>
                Jeśli przyjechałeś/-aś z zagranicy – skontaktuj się z sanepidem
                i poddaj obowiązkowej 14-dniowej kwarantannie.
              </p>
            </ListItem>
            <ListItem>
              <img src={IconAdviceNote} alt="advice icon" />
              <p>
                Regularnie uzupełniaj zakładkę{' '}
                <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link>: zapisuj w
                aplikacji objawy i temperaturę ciała.
              </p>
            </ListItem>
          </List>
          <div className="warning--content">
            <span className="warning--label">
              <img src={IconWarning} alt="Ważne" />
              Ważne
            </span>
            <p>
              Jeśli u Ciebie lub Twoich bliskich wystąpią objawy zakażenia
              koronawirusem, zadzwoń na infolinię Narodowego Funduszu Zdrowia
              (NFZ) 800 190 590 lub do lokalnej placówki służby zdrowia.
            </p>
          </div>
          <FieldSet>
            <Button onClick={() => history.push(Routes.Home)} text="OK" />
          </FieldSet>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default AdviceInformation;
