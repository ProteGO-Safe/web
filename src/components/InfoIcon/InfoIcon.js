import React from 'react';
import PropTypes from 'prop-types';
import { InfoIconContainer, InfoIconContent } from './InfoIcon.styled';

const InfoIcon = ({ className, icon, children }) => {
  return (
    <InfoIconContainer className={className}>
      <img src={icon} alt="Ikonka informacyjna" />
      <InfoIconContent>{children}</InfoIconContent>
    </InfoIconContainer>
  );
};

InfoIcon.prototype = {
  className: PropTypes.string,
  content: PropTypes.node,
  icon: PropTypes.oneOf(['info', 'warning', 'success'])
};

export default InfoIcon;
