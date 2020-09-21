import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { Error } from '../index';
import * as Styled from './Radio.styled';

const Radio = ({ checked, content, error, label, name, onChange }) => {
  const id = uniqueId('radio-');
  return (
    <Styled.Wrapper>
      <Styled.Radio
        id={id}
        checked={checked}
        name={name}
        onChange={onChange}
        type="radio"
      />
      <Styled.Label htmlFor={id} error={error} hasContent={!!content}>
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
