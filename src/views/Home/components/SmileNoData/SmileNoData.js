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
        Brakuje informacji do analizy Twojego ryzyka zakażenia koronawirusem.
      </Title>
      <Paragraph>
        Wypełnij test oceny ryzyka lub zaczekaj na informacje o kontaktach z
        zakażonymi.
      </Paragraph>
    </Wrapper>
  );
};

export default SmileNoData;
