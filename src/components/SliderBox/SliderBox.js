import React from 'react';
import { not } from 'ramda';
import PropTypes from 'prop-types';
import * as Styled from './SliderBox.styled';

const SliderBox = ({ icon, title, handleHeadClick, items }) => {
  if (not(items) || items.length === 0) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <Styled.Head onClick={handleHeadClick}>
        <Styled.Icon>{icon}</Styled.Icon>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Head>

      <Styled.Slider>{items}</Styled.Slider>
    </Styled.Wrapper>
  );
};

SliderBox.defaultProps = {
  items: []
};

SliderBox.propTypes = {
  handleHeadClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default SliderBox;
