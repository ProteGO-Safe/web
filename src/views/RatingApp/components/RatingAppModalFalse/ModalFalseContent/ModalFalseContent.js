import React from 'react';
import * as Styled from './ModalFalseContent.styled';
import { T } from '../../../../../components/T';

const ModalFalseContent = () => (
  <Styled.ModalFalseContent>
    <Styled.Image />
    <Styled.Title>
      <T i18nKey="rating_app_modal_text_3" />
    </Styled.Title>
    <Styled.Text>
      <T i18nKey="rating_app_modal_text_4" />
    </Styled.Text>
  </Styled.ModalFalseContent>
);

export default ModalFalseContent;
