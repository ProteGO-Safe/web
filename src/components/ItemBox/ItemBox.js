import React from 'react';
import PropTypes from 'prop-types';
import { RippleEffect } from '../index';
import * as Styled from './ItemBox.styled';

const ItemBox = ({ heading, firstLine, secondLine, onClick }) => (
  <Styled.Wrapper onClick={onClick}>
    <Styled.Heading>{heading}</Styled.Heading>
    <Styled.FirstLine>{firstLine}</Styled.FirstLine>
    <Styled.SecondLine>{secondLine}</Styled.SecondLine>

    <Styled.Line />

    <RippleEffect />
  </Styled.Wrapper>
);

ItemBox.defaultProps = {
  firstLine: null,
  secondLine: null
};

ItemBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  firstLine: PropTypes.node,
  heading: PropTypes.node.isRequired,
  secondLine: PropTypes.node
};

export default ItemBox;
