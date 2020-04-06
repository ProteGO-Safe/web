import React from 'react';
import {
  Container,
  GovTechWhiteLogo,
  GovPLWhiteLogo
} from './GovFooter.styled';

const GovFooter = ({ className }) => {
  return (
    <Container className={className}>
      <GovPLWhiteLogo />
      <GovTechWhiteLogo />
    </Container>
  );
};

export default GovFooter;
