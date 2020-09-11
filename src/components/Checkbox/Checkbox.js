import React from 'react';
import PropTypes from 'prop-types';
import { Error, Tooltip } from '../index';
import * as Styled from './Checkbox.styled';

const Checkbox = ({
  checked,
  error,
  label,
  name,
  onChange,
  tooltipContent,
  tooltipTitle
}) => (
  <Styled.Wrapper>
    <Styled.Checkbox
      id={name}
      checked={checked}
      name={name}
      onChange={onChange}
      type="checkbox"
    />
    <Styled.Label htmlFor={name} error={error} tooltip={tooltipContent}>
      <Styled.Text>{label}</Styled.Text>
      {tooltipContent && (
        <Tooltip sticky title={tooltipTitle} content={tooltipContent} />
      )}
    </Styled.Label>
    {error && <Error content={error} />}
  </Styled.Wrapper>
);

Checkbox.defaultProps = {
  checked: false,
  error: undefined
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
