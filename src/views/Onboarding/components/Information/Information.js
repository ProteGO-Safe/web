import React from 'react';
import './Information.scss';
import { OnboardingContent, Button, GovFooter } from '../../../../components';
import { View, Container, Content } from '../../../../theme/grid';
import Header from '../../../../components/Header/Header';
import { Icon } from './Information.styled';

const Information = ({ onNext }) => {
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
                Korzystamy z Modułu Bluetooth aby móc chronić się wzajemnie i
                umożliwić aplikacji informowanie o zagrożeniach.
              </p>
              <br />
              <p>
                Za chwilę zapytamy Cię, czy ProteGO Safe może skorzystać z
                udostępniania lokalizacji oraz Modułu Bluetooth.{' '}
                <strong>
                  Odpowiedz "Zezwól" lub "OK" na kolejnych ekranach.
                </strong>
              </p>
            </>
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default Information;
