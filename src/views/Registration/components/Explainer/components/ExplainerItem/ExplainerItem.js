import React from 'react';
import PropTypes from 'prop-types';

import { Content, Icon } from './ExplainerItem.styled';

const ExplainerItem = ({ content, icon }) => (
  <>
    <Icon src={icon} alt="Ikona" />
    <Content>{content}</Content>
  </>
);

ExplainerItem.propTypes = {
  content: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired
};

export default ExplainerItem;
