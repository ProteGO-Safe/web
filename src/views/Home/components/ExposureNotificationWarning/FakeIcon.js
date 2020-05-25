import React from 'react';
import styled from 'styled-components';

const FakeIcon = ({ icon }) => {
  return <Icon src={icon} alt="fake_icon" />;
};

const Icon = styled.img`
  display: none;
`;

export { FakeIcon };
