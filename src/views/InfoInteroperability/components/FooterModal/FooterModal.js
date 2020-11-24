import React from 'react';
import { Button, T } from '../../../../components';
import * as Styled from './FooterModal.styled';

const FooterModal = ({ handleClickFalse, handleClickTrue }) => {
  return (
    <Styled.FooterModal>
      <Button onClick={handleClickTrue}>
        <T i18nKey="info_interoperability_text3" />
      </Button>
      <Button onClick={handleClickFalse} type="outline">
        <T i18nKey="info_interoperability_text4" />
      </Button>
    </Styled.FooterModal>
  );
};

export default FooterModal;
