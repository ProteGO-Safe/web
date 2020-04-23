import React from 'react';
import { Icon1, Icon2, Icon3 } from './BluetoothModule.styled';
import { Content, Container, View } from '../../theme/grid';
import { BluetoothContent, Button, GovFooter } from '../../components';
import Header from '../../components/Header/Header';
import './BluetoothModule.scss';

const BluetoothModule = ({ buttons }) => {
  const renderButton = buttons.map(button => (
    <Button
      key={button.text}
      onClick={null}
      text={button.text}
      border={button.border}
    />
  ));

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <BluetoothContent
            icon={<Icon3 />}
            title="Nie udzieliłeś zgody na korzystanie z bluetootha."
            buttons={renderButton}
          >
            <p>
              Jest to bardzo ważny komponent aplikacji, zwiększający Twoje
              bezpieczeństwo. Rekomendujemy włączenie tej funkcjonalności teraz
              lub potem - w Ustawieniach aplikacji
            </p>
          </BluetoothContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default BluetoothModule;
