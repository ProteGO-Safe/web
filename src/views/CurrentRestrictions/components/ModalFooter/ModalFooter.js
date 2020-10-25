import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../../components';
import * as Styled from './ModalFooter.styled';

const ModalFooter = ({ t, handleClick }) => (
  <Styled.ModalFooter>
    <Button onClick={handleClick}>
      {t('current_restrictions_modal_button_name')}
    </Button>
  </Styled.ModalFooter>
);

export default withTranslation()(ModalFooter);
