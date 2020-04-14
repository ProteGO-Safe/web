import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { Button, GovFooter, Header } from '../../../../components';
import { Container } from '../../../../theme/grid';
import { Content, SliderWrapper, Title } from './Explainer.styled';
import { LOGO_COLOR_BLACK } from '../../../../constants';

const Explainer = ({ carouselRef, items, onClick, settings }) => (
  <div className="view view__explainer">
    <Header hideBackButton hideMenuButton logoPosition="left" />
    <Container>
      <Content>
        <Title>
          Włącz się do wspólnej walki
          <br />
          przeciwko koronawirusowi
        </Title>
        <SliderWrapper>
          <Slider ref={carouselRef} {...settings}>
            {items}
          </Slider>
        </SliderWrapper>
        <Button onClick={onClick} text="Dalej" />
      </Content>
      <GovFooter type={LOGO_COLOR_BLACK} />
    </Container>
  </div>
);

Explainer.propTypes = {
  // eslint-disable-next-line
  carouselRef: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line
  settings: PropTypes.object.isRequired
};

export default Explainer;
