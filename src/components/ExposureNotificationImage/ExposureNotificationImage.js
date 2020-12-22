import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './ExposureNotificationImage.styled';

const ExposureNotificationImage = ({ active, color }) => (
  <Styled.ExposureNotificationImage>
    <Styled.Circle color={color} />
    {active ? <Styled.ImageActive /> : <Styled.ImageDisactive />}
  </Styled.ExposureNotificationImage>
);

ExposureNotificationImage.defaultProps = {
  active: false
};

ExposureNotificationImage.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string.isRequired
};

export default ExposureNotificationImage;
