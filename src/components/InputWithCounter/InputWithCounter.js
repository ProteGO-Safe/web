import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Counter, Error } from './components';
import * as Styled from './InputWithCounter.styled';

const InputWithCounter = ({ error, info, label, max, min, name, onChange, placeholder, value }) => {
  const ref = useRef(null);
  const [margin, setMargin] = useState(null);

  useEffect(() => {
    const height = ref.current.offsetHeight;
    setMargin(height);
  }, []);

  return (
    <Styled.InputWithCounter>
      {label && <Styled.Label ref={ref}>{label}</Styled.Label>}
      <Styled.Input
        data-cy={`input-with-counter-${name}`}
        error={error}
        maxLength={max}
        minLength={min}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      <Counter count={value ? value.length : 0} limit={max} margin={margin} />
      {error && <Error id={`input-with-counter-error-${name}`} text={error} />}

      {info && <Styled.Information>{info}</Styled.Information>}
    </Styled.InputWithCounter>
  );
};

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
  info: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default InputWithCounter;
