import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { Button, GovFooter, Header } from '../../../../components';
import { Container, Content, View } from '../../../../theme/grid';
import { SliderWrapper, Title } from './Explainer.styled';

const Explainer = ({ t, carouselRef, index, items, onClick, settings }) => {
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          {index < 1 ? (
            <Title>{t('explainer_text1')}</Title>
          ) : (
            <Title>
              {t('explainer_text2')}
              <br />
              {t('explainer_text3')}
            </Title>
          )}
          <SliderWrapper>
            <Slider ref={carouselRef} {...settings}>
              {items}
            </Slider>
          </SliderWrapper>
          <Button onClick={onClick} label={t('button_next')} />
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
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

export default withTranslation()(Explainer);
