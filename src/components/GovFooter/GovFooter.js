import React from 'react';
import PropTypes from 'prop-types';
import { LOGO_COLOR_BLACK, LOGO_COLOR_WHITE } from '../../constants';
import { renderWhenTrue } from '../../helpers/rendering';
import {
  Container,
  GovPLBlackLogo,
  GovTechBlackLogo,
  GovTechWhiteLogo,
  GovPLWhiteLogo
} from './GovFooter.styled';

const GovFooter = ({ className, type }) => {
  const renderBlackVariant = renderWhenTrue(() => (
    <>
      <GovPLBlackLogo />
      <GovTechBlackLogo />
    </>
  ));

  const renderWhiteVariant = renderWhenTrue(() => (
    <>
      <GovPLWhiteLogo />
      <GovTechWhiteLogo />
    </>
  ));

  return (
    <Container className={className}>
      {renderBlackVariant(type === LOGO_COLOR_BLACK)}
      {renderWhiteVariant(type === LOGO_COLOR_WHITE)}
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
