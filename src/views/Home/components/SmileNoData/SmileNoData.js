import React from 'react';
import { withTranslation } from 'react-i18next';
import { GreenSmile } from '../../../../assets/img/icons/buzka-zielona';
import { YellowSmile } from '../../../../assets/img/icons/buzka-zolta';
import { RedSmile } from '../../../../assets/img/icons/buzka-czerwona';
import { Icons, Paragraph, Title, Wrapper } from './SmileNoData.styled';

const SmileNoData = ({ t }) => {
  return (
    <Wrapper>
      <Icons>
        <GreenSmile />
        <YellowSmile />
        <RedSmile />
      </Icons>
      <Title>{t('smile_no_data_text1')}</Title>
      <Paragraph>{t('smile_no_data_text2')}</Paragraph>
    </Wrapper>
  );
};

export default withTranslation()(SmileNoData);
