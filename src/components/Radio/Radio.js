import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { Error } from '../index';
import * as Styled from './Radio.styled';

const Radio = ({ checked, content, error, label, name, onChange, testId }) => {
  const id = uniqueId('radio-');
  return (
    <Styled.Wrapper>
      <Styled.Radio
        data-cy={`radio-input-${name}-${testId}`}
        id={id}
        checked={checked}
        name={name}
        onChange={onChange}
        type="radio"
      />
      <Styled.Label data-cy={`radio-label-${name}-${testId}`} error={error} hasContent={!!content} htmlFor={id}>
        <Styled.Text>{label}</Styled.Text>
        {content && content}
      </Styled.Label>
      {error && <Error content={error} />}
    </Styled.Wrapper>
  );
};

Radio.defaultProps = {
  checked: false,
  content: undefined,
  error: undefined
};

Radio.propTypes = {
  checked: PropTypes.bool,
  content: PropTypes.node,
  error: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
