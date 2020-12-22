import React from 'react';
import PropTypes from 'prop-types';
import { Switcher } from '../Switcher';
import { T } from '../index';
import * as Styled from './WarningInEuropeTerm.styled';

const WarningInEuropeTerm = ({ checked, forceOpen, name, onChange }) => {
  const renderLabel = (
    <Styled.Content>
      <Styled.Flag />
      <Styled.Label>
        <T i18nKey={checked ? 'turn_off' : 'turn_on'} />: <T i18nKey="warning_in_europe_text1" />
      </Styled.Label>
    </Styled.Content>
  );

  return (
    <Styled.WarningInEuropeTerm>
      <Styled.Container>
        <Switcher label={renderLabel} checked={checked} onChange={onChange} name={name} />
      </Styled.Container>

      <Styled.TermDescription open={checked || forceOpen}>
        <Styled.Container>
          <T i18nKey="warning_in_europe_term_text_1" />{' '}
        </Styled.Container>
      </Styled.TermDescription>
    </Styled.WarningInEuropeTerm>
  );
};

WarningInEuropeTerm.defaultProps = {
  checked: false,
  forceOpen: false
};

WarningInEuropeTerm.propTypes = {
  checked: PropTypes.bool,
  forceOpen: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default WarningInEuropeTerm;
