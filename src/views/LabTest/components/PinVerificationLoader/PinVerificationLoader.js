import React from 'react';
import { withTranslation } from 'react-i18next';
import { SmallText } from '../../../../theme/typography';
import * as Styled from '../../LabTest.styled';
import { CircleLoader } from '../../../../components/CircleLoader';

const PinVerificationLoader = ({ t }) => (
  <Styled.Loader>
    <Styled.SubTitle>{t('lab_test_text10')}</Styled.SubTitle>
    <SmallText>{t('lab_test_text11')}</SmallText>
    <CircleLoader />
  </Styled.Loader>
);

export default withTranslation()(PinVerificationLoader);
