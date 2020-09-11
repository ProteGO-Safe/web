import React from 'react';
import PropTypes from 'prop-types';
import { Error, Tooltip } from '../index';
import * as Styled from './Radio.styled';

const Radio = ({
  checked,
  error,
  label,
  name,
  onChange,
  tooltipContent,
  tooltipTitle
}) => (
  <Styled.Wrapper>
    <Styled.Radio
      id={label}
      checked={checked}
      name={name}
      onChange={onChange}
      type="radio"
    />
    <Styled.Label htmlFor={label} error={error} tooltip={tooltipContent}>
      <Styled.Text>{label}</Styled.Text>
      {tooltipContent && (
        <Tooltip sticky title={tooltipTitle} content={tooltipContent} />
      )}
    </Styled.Label>
    {error && <Error content={error} />}
  </Styled.Wrapper>
);

Radio.defaultProps = {
  checked: false,
  error: undefined
};

Radio.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
