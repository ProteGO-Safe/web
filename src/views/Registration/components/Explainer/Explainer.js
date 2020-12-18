import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Button, T } from '../../../../components';
import * as Styled from './Explainer.styled';

const Explainer = ({ carouselRef, index, items, onClick, settings }) => {
  return (
    <>
      {index < 1 ? (
        <Styled.Title>
          <T i18nKey="explainer_text1" />
        </Styled.Title>
      ) : (
        <Styled.Title>
          <T i18nKey="explainer_text2" />
        </Styled.Title>
      )}
      <Styled.SliderWrapper data-cy={`explainer-step-${index + 1}`}>
        <Slider ref={carouselRef} {...settings}>
          {items}
        </Slider>
      </Styled.SliderWrapper>

      <Styled.ButtonWrapper data-cy="button-next-wrapper">
        <Button onClick={onClick} label={<T i18nKey="button_next" />} />
      </Styled.ButtonWrapper>
    </>
  );
};

Explainer.propTypes = {
  // eslint-disable-next-line
  carouselRef: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line
  settings: PropTypes.object.isRequired
};

export default Explainer;
