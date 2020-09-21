import React from 'react';
import * as Styled from './ModalClose.styled';

const ModalClose = ({ onClick }) => (
  <Styled.ModalClose onClick={onClick}>
    <Styled.Icon />
  </Styled.ModalClose>
);

export default ModalClose;
