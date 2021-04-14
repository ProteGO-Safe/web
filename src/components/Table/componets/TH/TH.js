import React from 'react';
import PropTypes from 'prop-types';
import { ARROW_TYPE } from '../../table.constants';
import * as Styled from './TH.styled';

import { ReactComponent as ArrowIcon } from '../../../../assets/img/icons/arrow-current-color.svg';

const TH = ({ align, colspan, children, onClick, selected, type }) => (
  <Styled.TH align={align} colspan={colspan} onClick={onClick}>
    {children}

    <Styled.Icon selected={selected} type={type}>
      <ArrowIcon />
    </Styled.Icon>
  </Styled.TH>
);

TH.defaultProps = {
  align: 'center',
  children: '',
  selected: false,
  onClick: () => null,
  type: ARROW_TYPE.DOWN
};

TH.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  type: PropTypes.oneOf([ARROW_TYPE.DOWN, ARROW_TYPE.UP])
};

export default TH;
