import React from 'react';
import { T } from '../../../../components';
import * as Styled from './RatingAppModalContent.styled';

const RatingAppModalContent = () => (
  <Styled.RatingAppModalContent>
    <Styled.Image />
    <Styled.Title>
      <T i18nKey="rating_app_modal_text_1" />
    </Styled.Title>
    <Styled.Text>
      <T i18nKey="rating_app_modal_text_2" />
    </Styled.Text>
  </Styled.RatingAppModalContent>
);

export default RatingAppModalContent;
