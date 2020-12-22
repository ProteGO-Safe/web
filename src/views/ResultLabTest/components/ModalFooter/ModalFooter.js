import React from 'react';
import { Button, T } from '../../../../components';
import * as Styled from './ModalFooter.styled';

const ModalFooter = ({ handleClickYes, handleClickCancel }) => (
  <Styled.ModalFooter>
    <Button onClick={handleClickYes}>
      <T i18nKey="yes" />
    </Button>
    <Button onClick={handleClickCancel} type="outline">
      <T i18nKey="CANCEL_BUTTON_TITLE" />
    </Button>
  </Styled.ModalFooter>
);

export default ModalFooter;
