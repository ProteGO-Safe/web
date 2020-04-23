import React from 'react';
import PropTypes from 'prop-types';
import {
  BluetoothWrapper,
  ButtonWrapper,
  IconWrapper,
  Text,
  Title
} from './BluetoothContent.styled';

const BluetoothContent = ({ buttons, children, icon, title }) => {
  return (
    <BluetoothWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Text>{children}</Text>
      <ButtonWrapper>{buttons}</ButtonWrapper>
    </BluetoothWrapper>
  );
};

BluetoothContent.defaultProps = {
  buttons: []
};

BluetoothContent.propTypes = {
  buttons: PropTypes.array,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BluetoothContent;
