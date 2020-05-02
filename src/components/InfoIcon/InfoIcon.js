import React from 'react';
import PropTypes from 'prop-types';
import { InfoIconContainer, InfoIconContent } from './InfoIcon.styled';

const InfoIcon = ({ icon, children }) => {
  return (
    <InfoIconContainer>
      <img src={icon} alt="Ikonka informacyjna" />
      <InfoIconContent>{children}</InfoIconContent>
    </InfoIconContainer>
  );
};

InfoIcon.prototype = {
  content: PropTypes.node,
  icon: PropTypes.oneOf(['info', 'warning', 'success'])
};

export default InfoIcon;
