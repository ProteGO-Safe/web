import React from 'react';
import { SmallText } from '../../../../theme/typography';
import * as Styled from '../../LabTest.styled';
import { CircleLoader, T } from '../../../../components';

const PinVerificationLoader = () => (
  <Styled.Loader>
    <Styled.SubTitle>
      <T i18nKey="lab_test_text10" />
    </Styled.SubTitle>
    <SmallText>
      <T i18nKey="lab_test_text11" />
    </SmallText>
    <CircleLoader />
  </Styled.Loader>
);

export default PinVerificationLoader;
