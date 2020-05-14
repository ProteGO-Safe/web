import React from 'react';
import './Information.scss';
import {
  OnboardingContent,
  Button,
  GovFooter
} from '../../../../../../components';
import { View, Container, Content } from '../../../../../../theme/grid';
import Header from '../../../../../../components/Header/Header';
import { Icon } from './Information.styled';

const Information = ({ onNext, onMore }) => {
  const buttons = [
    {
      border: false,
      text: 'Dalej',
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
            title="Skonfiguruj uprawnienia ProteGO Safe"
            buttons={renderButton}
          >
            <>
              <p>
                Nowa wersja aplikacji pozwala na korzystanie z funkcji
                Bluetooth.
              </p>
              <br />
              <p>Pozwól aplikacji na informowanie Cię o zagrożeniach.</p>
              <br />
              <p onClick={onMore}>Więcej informacji</p>
            </>
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default Information;
