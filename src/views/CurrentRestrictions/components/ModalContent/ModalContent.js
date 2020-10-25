import React from 'react';
import { withTranslation } from 'react-i18next';
import * as Styled from './ModalContent.styled';

const ModalContent = ({ t }) => (
  <Styled.ModalContent>
    <Styled.Title>
      {t('current_restrictions_modal_title1')}
      <br />
      {t('current_restrictions_modal_title2')}
    </Styled.Title>
    <Styled.Image />
    <Styled.Description>
      <Styled.Paragraph>
        {t('current_restrictions_modal_paragraph1')}{' '}
        <strong>{t('current_restrictions_modal_paragraph2')}</strong>{' '}
        {t('current_restrictions_modal_paragraph3')}
      </Styled.Paragraph>
      <Styled.Paragraph>
        <strong>{t('current_restrictions_modal_paragraph4')}</strong>{' '}
        {t('current_restrictions_modal_paragraph5')}
      </Styled.Paragraph>
    </Styled.Description>
  </Styled.ModalContent>
);

export default withTranslation()(ModalContent);
