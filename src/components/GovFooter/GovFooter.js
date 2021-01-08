import React from 'react';
import PropTypes from 'prop-types';
import { LOGO_COLOR_BLACK, LOGO_COLOR_WHITE } from '../../constants';
import { renderWhenTrue } from '../../helpers/rendering';
import * as Styled from './GovFooter.styled';

import { ReactComponent as GovPLBlackLogo } from '../../assets/img/logo/Logo-govpl.svg';
import { ReactComponent as GovTechBlackLogo } from '../../assets/img/logo/govtech_black.svg';
import { ReactComponent as GovPLWhiteLogo } from '../../assets/img/logo/Logo-govpl-WHITE.svg';
import { ReactComponent as GovTechWhiteLogo } from '../../assets/img/logo/govtech_white.svg';

const GovFooter = ({ className, type }) => {
  const renderBlackVariant = renderWhenTrue(() => (
    <>
      <GovPLBlackLogo />
      <Styled.SVG>
        <GovTechBlackLogo />
      </Styled.SVG>
    </>
  ));

  const renderWhiteVariant = renderWhenTrue(() => (
    <>
      <GovPLWhiteLogo />
      <Styled.SVG>
        <GovTechWhiteLogo />
      </Styled.SVG>
    </>
  ));

  return (
    <Styled.Wrapper className={className}>
      {renderBlackVariant(type === LOGO_COLOR_BLACK)}
      {renderWhiteVariant(type === LOGO_COLOR_WHITE)}
    </Styled.Wrapper>
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
