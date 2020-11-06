import React from 'react';
import { Switcher } from '../Switcher';
import { T } from '../index';
import { Routes } from '../../services/navigationService/routes';
import * as Styled from './WarningInEuropeTerm.styled';

const WarningInEuropeTerm = ({ checked, handleOnChange, name, forceOpen }) => {
  const renderLabel = (
    <Styled.Content>
      <Styled.Flag />
      <Styled.Label>
        <T i18nKey={checked ? 'turn_off' : 'turn_on'} />:{' '}
        <T i18nKey="warning_in_europe_text1" />
      </Styled.Label>
    </Styled.Content>
  );

  return (
    <Styled.WarningInEuropeTerm>
      <Styled.Container>
        <Switcher
          label={renderLabel}
          checked={checked}
          onChange={handleOnChange}
          name={name}
        />
      </Styled.Container>

      <Styled.TermDescription open={checked || forceOpen}>
        <Styled.Container>
          <T i18nKey="warning_in_europe_term_text2" />{' '}
          <Styled.Link to={Routes.PrivacyPolicyDetails}>
            <T i18nKey="warning_in_europe_term_text3" />
          </Styled.Link>
        </Styled.Container>
      </Styled.TermDescription>
    </Styled.WarningInEuropeTerm>
  );
};

export default WarningInEuropeTerm;
