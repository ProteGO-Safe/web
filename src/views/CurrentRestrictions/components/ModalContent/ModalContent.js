import React from 'react';
import { withTranslation } from 'react-i18next';
import * as Styled from './ModalContent.styled';
import { T } from '../../../../components/T';

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
        <T i18nKey="current_restrictions_modal_paragraph1" />
      </Styled.Paragraph>
      <Styled.Paragraph>
        <T i18nKey="current_restrictions_modal_paragraph4" />
      </Styled.Paragraph>
    </Styled.Description>
  </Styled.ModalContent>
);

export default withTranslation()(ModalContent);
