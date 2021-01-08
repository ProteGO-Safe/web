import React from 'react';
import PropTypes from 'prop-types';
import { Error } from '../index';
import * as Styled from './Checkbox.styled';

const Checkbox = ({ checked, content, error, label, name, onChange }) => (
  <Styled.Wrapper>
    <Styled.Checkbox
      data-cy={`checkbox-input-${name}`}
      id={name}
      checked={checked}
      name={name}
      onChange={onChange}
      type="checkbox"
    />
    <Styled.Label data-cy={`checkbox-label-${name}`} htmlFor={name} error={error} hasContent={!!content}>
      <Styled.Text>{label}</Styled.Text>
      {content && content}
    </Styled.Label>
    {error && <Error content={error} />}
  </Styled.Wrapper>
);

Checkbox.defaultProps = {
  checked: false,
  content: undefined,
  error: undefined
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  content: PropTypes.node,
  error: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
