import React from 'react';
import './NotSupported.scss';
import {
  OnboardingContent,
  Button,
  GovFooter
} from '../../../../../../components';
import { View, Container, Content } from '../../../../../../theme/grid';
import Header from '../../../../../../components/Header/Header';
import { Icon } from './NotSupported.styled';

const NotSupported = ({ onNext }) => {
  const buttons = [
    {
      border: false,
      text: 'Rozumiem',
      onClick: onNext
    }
  ];

  const renderButton = buttons.map(button => (
    <Button
      key={button.text}
      onClick={button.onClick}
      text={button.text}
      border={button.border}
    />
  ));

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <OnboardingContent
            icon={<Icon />}
            title="Niezgodna wersja"
            buttons={renderButton}
          >
            <p>
              Coś jest nie tak. Sprawdź swoje urządzenie - zaktualizuj wersję
              systemu swojego telefonu. To konieczne, jeśli chcesz w pełni
              korzystać ze wszystkich funkcjonalności aplikacji. Wsparcie dla
              powiadamiania o możliwym kontakcie z koronawirusem posiadają
              zaktualizowane urządzenia Android i tylko urządzenia iPhone z iOS
              13.5 i nowszym.
            </p>
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default NotSupported;
