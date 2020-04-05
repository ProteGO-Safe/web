import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import useModalContext from '../../hooks/useModalContext';
import { Help } from '../../views/Help';
import { Button } from '../Button';

const PanicButton = ({ disabled, height, size, type }) => {
  const { openModal } = useModalContext();
  const handleButtonClick = useCallback(() => {
    openModal(<Help />);
  }, [openModal]);
  return (
    <Button
      disabled={disabled}
      type={type}
      height={height}
      size={size}
      text="?"
      onClick={handleButtonClick}
    />
  );
};

PanicButton.defaultProps = {
  disabled: false,
  height: 'small',
  size: 'small',
  type: 'outline'
};

PanicButton.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.oneOf(['small', 'normal']),
  size: PropTypes.oneOf(['small', 'medium', 'normal']),
  type: PropTypes.oneOf([
    'black',
    'blank',
    'gray',
    'outline',
    'primary',
    'secondary',
    'success',
    'success-blank',
    'white'
  ])
};

export default PanicButton;
