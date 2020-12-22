import React from 'react';
import * as Styled from './Info.styled';

import { ReactComponent as Icon } from '../../../../assets/img/icons/icon-no-data.svg';

const Info = ({ content }) => (
  <Styled.Wrapper>
    <Styled.IconWrapper>
      <Icon />
    </Styled.IconWrapper>

    <Styled.Content>{content}</Styled.Content>
  </Styled.Wrapper>
);

export default Info;
