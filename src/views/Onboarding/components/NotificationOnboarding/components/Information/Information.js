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

const Information = ({ onNext, onSkip }) => {
  const buttons = [
    {
      border: false,
      text: 'Dalej',
      onClick: onNext
    },
    {
      text: 'Nie powiadamiaj mnie o zagrożeniach',
      type: 'tertiary',
      onClick: onSkip
    }
  ];

  const renderButton = buttons.map(button => (
    <Button
      key={button.text}
      onClick={button.onClick}
      text={button.text}
      border={button.border}
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
            title="Włącz powiadomienia"
            buttons={renderButton}
          >
            <>
              <p>
                Do prawidłowego działania aplikacji potrzebna jest Twoja zgoda
                na wyświetlanie powiadomień. Kliknij poniżej i pozwól ProteGO
                Safe wspierać ochronę zdrowia każdego z nas.
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
