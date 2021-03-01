import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './ContentText.styled';

const ContentText = ({ translatedText }) => (
  <Styled.Wrapper>
    {translatedText}
  </Styled.Wrapper>
);

ContentText.propTypes = {
  translatedText: PropTypes.node.isRequired
};

export default ContentText;
