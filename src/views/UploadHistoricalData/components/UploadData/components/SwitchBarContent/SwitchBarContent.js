import React from 'react';
import EuropeanUnionFlag from '../../../../../../assets/img/flags/european-union.svg';
import * as Styled from './SwitchBarContent.styled';
import { SmallText } from '../../../../../../theme/typography';
import { T } from '../../../../../../components/T';

const SwitchBarContent = ({ checked }) => (
  <Styled.Wrapper>
    <img alt="European Union flag" src={EuropeanUnionFlag} />
    <SmallText>
      <T i18nKey={checked ? 'upload_data_text_11' : 'upload_data_text_12'} />
    </SmallText>
  </Styled.Wrapper>
);

export default SwitchBarContent;
