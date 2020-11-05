import React from 'react';
import { T } from '../../../../components/T';
import * as Styled from './ContentModal.styled';

const ContentModal = ({ title, content }) => (
  <Styled.ContentModal>
    <Styled.Title>
      <T i18nKey={title} />
    </Styled.Title>

    <Styled.Images>
      <Styled.FlagPL />
      <Styled.Img />
      <Styled.FlagUE />
    </Styled.Images>

    <Styled.Description>
      <T i18nKey={content} />
    </Styled.Description>
  </Styled.ContentModal>
);

export default ContentModal;
