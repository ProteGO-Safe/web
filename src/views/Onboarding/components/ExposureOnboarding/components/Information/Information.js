import React from 'react';
import './Information.scss';
import {
  OnboardingContent,
  Button,
  GovFooter
} from '../../../../../../components';
import { View, Container, Content } from '../../../../../../theme/grid';
import Header from '../../../../../../components/Header/Header';
import { Icon, More } from './Information.styled';

const Information = ({ onNext, onMore, onSkip }) => {
  const buttons = [
    {
      label: 'Dalej',
      onClick: onNext
    },
    {
      label: 'Nie powiadamiaj mnie o zagrożeniach',
      type: 'blankSmall',
      onClick: onSkip
    }
  ];

  const renderButton = buttons.map(button => (
    <Button
      key={button.label}
      onClick={button.onClick}
      label={button.label}
      type={button.type}
    />
  ));

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <OnboardingContent
            icon={<Icon />}
            title="Wszystko w Twoich rękach. Ta wersja aplikacji korzysta z narzędzi
              systemów iOS/Android do powiadamiania o możliwym kontakcie z
              koronawirusem."
            buttons={renderButton}
          >
            <>
              <p>
                Pozwól, by aplikacja anonimowo rejestrowała spotkania z innymi
                urządzeniami. Dzięki temu, gdy użytkownik, któregoś z nich
                zachoruje, otrzymasz odpowiednie powiadomienie. Zadbaj o swoje i
                swoich bliskich zdrowie.
              </p>
              <br />
              <More onClick={onMore}>Więcej informacji</More>
            </>
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default Information;
