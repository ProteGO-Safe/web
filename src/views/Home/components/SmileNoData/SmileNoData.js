import React from 'react';
import { GreenSmile } from '../../../../assets/img/icons/buzka-zielona';
import { YellowSmile } from '../../../../assets/img/icons/buzka-zolta';
import { RedSmile } from '../../../../assets/img/icons/buzka-czerwona';
import { Icons, Paragraph, Title, Wrapper } from './SmileNoData.styled';

const SmileNoData = () => {
  return (
    <Wrapper>
      <Icons>
        <GreenSmile />
        <YellowSmile />
        <RedSmile />
      </Icons>
      <Title>
        Aplikacji ProteGo Safe brakuje danych do analizy Twojego ryzyka infekcji
        COVID-19.
      </Title>
      <Paragraph>
        Możesz wykonać wstępną analizę wypełniając poniższy Test Oceny Ryzyka
        lub czekać na informacje o kontaktach z osobami chorymi na COVID-19.
      </Paragraph>
    </Wrapper>
  );
};

export default SmileNoData;
