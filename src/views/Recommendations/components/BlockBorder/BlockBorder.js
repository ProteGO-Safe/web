import React from 'react';
import { T } from '../../../../components';
import * as Styled from './BlockBorder.styled';

const BlockBorder = ({ items = [], title }) => {
  const renderItems = items.map((item, key) => (
    <Styled.ListItem key={key}>
      <T i18nKey={item} />
    </Styled.ListItem>
  ));

  return (
    <Styled.Wrapper>
      <Styled.SmallTitle>{title}</Styled.SmallTitle>
      {items.length > 0 && <Styled.List>{renderItems}</Styled.List>}
    </Styled.Wrapper>
  );
};

export default BlockBorder;
