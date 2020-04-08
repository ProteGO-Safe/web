import React from 'react';
import PropTypes from 'prop-types';
import { LOGO_COLOR_BLACK, LOGO_COLOR_WHITE } from '../../constants';
import {
  Container,
  GovPLBlackLogo,
  GovTechBlackLogo,
  GovTechWhiteLogo,
  GovPLWhiteLogo
} from './GovFooter.styled';

const GovFooter = ({ className, type }) => {
  return (
    <Container className={className}>
      {type === LOGO_COLOR_BLACK && (
        <>
          <GovPLBlackLogo />
          <GovTechBlackLogo />
        </>
      )}
      {type === LOGO_COLOR_WHITE && (
        <>
          <GovPLWhiteLogo />
          <GovTechWhiteLogo />
        </>
      )}
    </Container>
  );
};

GovFooter.defaultProps = {
  className: '',
  type: LOGO_COLOR_WHITE
};

GovFooter.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([LOGO_COLOR_BLACK, LOGO_COLOR_WHITE])
};

export default GovFooter;
