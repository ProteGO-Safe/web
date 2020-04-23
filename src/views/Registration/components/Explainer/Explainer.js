import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { Button, GovFooter, Header } from '../../../../components';
import { Container, Content, View } from '../../../../theme/grid';
import { SliderWrapper, Title } from './Explainer.styled';

const Explainer = ({ carouselRef, items, onClick, settings }) => (
  <View>
    <Header hideBackButton hideMenuButton />
    <Content>
      <Container className="full-height">
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
        <GovFooter type="black" />
      </Container>
    </Content>
  </View>
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
