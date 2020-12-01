import React from 'react';
import { Smile, TriageInfoBorder, TriageRiskInformation } from '../../../index';
import { T } from '../../../../../../components';
import { Paragraph } from '../../../../../../theme/typography';
import { Color } from '../../../../../../theme/colors';
import * as Styled from './ExposureSick.styled';

const ExposureSick = () => {
  return (
    <>
      <Smile />
      <TriageRiskInformation />
      <TriageInfoBorder />
      <Styled.MoreInformation>
        <Styled.Title>
          <T i18nKey="exposure_sick_text1" />
        </Styled.Title>
        <Paragraph color={Color.lightBlack}>
          <T i18nKey="exposure_sick_text2" />
        </Paragraph>
      </Styled.MoreInformation>
    </>
  );
};

export default ExposureSick;
