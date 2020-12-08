import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './ExposureNotificationImage.styled';

const ExposureNotificationImage = ({ active, color }) => (
  <Styled.ExposureNotificationImage>
    <Styled.Circle color={color} />
    {active ? <Styled.ImageActive /> : <Styled.ImageDisactive />}
  </Styled.ExposureNotificationImage>
);

ExposureNotificationImage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  active: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  color: PropTypes.string
};

export default ExposureNotificationImage;
