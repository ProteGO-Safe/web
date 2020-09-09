import React from 'react';
import PropTypes from 'prop-types';
import { Counter, Error } from './components';
import * as Styled from './InputWithCounter.styled';

const InputWithCounter = ({
  error,
  info,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  value
}) => (
  <Styled.InputWithCounter>
    {label && <Styled.Label>{label}</Styled.Label>}
    <Styled.Input
      error={error}
      maxLength={max}
      minLength={min}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
    <Counter count={value ? value.length : 0} limit={max} />
    {error && <Error text={error} />}

    {info && <Styled.Information>{info}</Styled.Information>}
  </Styled.InputWithCounter>
);

InputWithCounter.defaultProps = {
  error: '',
  info: undefined,
  label: undefined,
  max: undefined,
  min: undefined,
  name: undefined,
  onChange: () => null,
  placeholder: '',
  value: null
};

InputWithCounter.propTypes = {
  error: PropTypes.string,
  info: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default InputWithCounter;
