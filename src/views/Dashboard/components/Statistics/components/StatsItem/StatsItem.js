import React from 'react';
import { not } from 'ramda';
import PropTypes from 'prop-types';
import { numberWithSpaces } from '../../../../../../utils/number';
import * as Styled from './StatsItem.styled';

const StatsItem = ({ value, label, smallSize, withoutPlus }) => {
  if (not(Number.isInteger(value))) {
    return null;
  }

  return (
    <>
      <Styled.Value smallSize={smallSize}>
        {value > 0 && not(withoutPlus) && '+ '}
        {numberWithSpaces(value)}
      </Styled.Value>
      {` `}
      <Styled.Label>{label}</Styled.Label>
    </>
  );
};

StatsItem.defaultProps = {
  smallSize: false,
  withoutPlus: false
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  smallSize: PropTypes.bool,
  value: PropTypes.number.isRequired,
  withoutPlus: PropTypes.bool
};

export default StatsItem;
