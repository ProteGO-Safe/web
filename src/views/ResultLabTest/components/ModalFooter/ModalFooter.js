import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../../components';
import * as Styled from './ModalFooter.styled';

const ModalFooter = ({ handleClickYes, handleClickCancel, t }) => (
  <Styled.ModalFooter>
    <Button onClick={handleClickYes}>{t('yes')}</Button>
    <Button onClick={handleClickCancel} type="outline">
      {t('CANCEL_BUTTON_TITLE')}
    </Button>
  </Styled.ModalFooter>
);

export default withTranslation()(ModalFooter);
