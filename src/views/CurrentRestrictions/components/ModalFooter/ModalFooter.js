import React from 'react';
import { Button, T } from '../../../../components';
import * as Styled from './ModalFooter.styled';

const ModalFooter = ({ handleClick }) => (
  <Styled.ModalFooter>
    <Button onClick={handleClick}>
      <T i18nKey="current_restrictions_modal_button_name" />
    </Button>
  </Styled.ModalFooter>
);

export default ModalFooter;
