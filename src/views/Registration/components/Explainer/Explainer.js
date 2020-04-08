import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { Button, Container, GovFooter, Header } from '../../../../components';
import { Content, SliderWrapper, Title } from './Explainer.styled';
import { LOGO_COLOR_BLACK } from '../../../../constants';

const settings = {
  dots: true,
  slidesToShow: 1,
  swipe: true,
  swipeToSlide: true
};

const Explainer = ({ items, onClick }) => (
  <div className="view view__explainer">
    <Header hideBackButton hideMenuButton />
    <Container>
      <Content>
        <Title>
          Włącz się do wspólnej walki
          <br />
          przeciwko koronawirusowi
        </Title>
        <SliderWrapper>
          <Slider {...settings}>{items}</Slider>
        </SliderWrapper>
        <Button onClick={onClick} text="Dalej" />
      </Content>
      <GovFooter type={LOGO_COLOR_BLACK} />
    </Container>
  </div>
);

Explainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Explainer;
