import React from 'react';
import * as Styled from './CallHelpline.styled';

import { ReactComponent as IconContact } from '../../assets/img/icons/icon-contact.svg';
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/arrow-current-color.svg';

const CallHelpline = ({ phoneNumber, children }) => (
  <Styled.Wrapper href={`tel:${phoneNumber}`}>
    <Styled.IconWrapper>
      <IconContact />
    </Styled.IconWrapper>

    <Styled.Content>{children}</Styled.Content>

    <Styled.ArrowRight>
      <ArrowIcon />
    </Styled.ArrowRight>
  </Styled.Wrapper>
);

export default CallHelpline;
