import React from 'react';
import { GreenSmile } from '../../../../assets/img/icons/buzka-zielona';
import { YellowSmile } from '../../../../assets/img/icons/buzka-zolta';
import { RedSmile } from '../../../../assets/img/icons/buzka-czerwona';
import { Icons, Paragraph, Title, Wrapper } from './SmileNoData.styled';
import { T } from '../../../../components';

const SmileNoData = () => {
  return (
    <Wrapper>
      <Icons>
        <GreenSmile />
        <YellowSmile />
        <RedSmile />
      </Icons>
      <Title>
        <T i18nKey="smile_no_data_text1" />
      </Title>
      <Paragraph>
        <T i18nKey="smile_no_data_text2" />
      </Paragraph>
    </Wrapper>
  );
};

export default SmileNoData;
