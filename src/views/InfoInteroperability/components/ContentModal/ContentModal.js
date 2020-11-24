import React from 'react';
import { T } from '../../../../components/T';
import { WarningInEuropeImage } from '../../../../components';
import * as Styled from './ContentModal.styled';

const ContentModal = ({ title, content }) => (
  <Styled.ContentModal>
    <Styled.Title>
      <T i18nKey={title} />
    </Styled.Title>

    <WarningInEuropeImage />

    <Styled.Description>
      <T i18nKey={content} />
    </Styled.Description>
  </Styled.ContentModal>
);

export default ContentModal;
