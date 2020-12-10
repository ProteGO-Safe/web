import React from 'react';
import * as Styled from './NavigationBackGuard.styled';
import { FieldSet } from '../FieldSet';
import { Button, T } from '../index';
import { BUTTON_TYPES } from '../Button/Button.constants';

const NavigationBackGuard = ({ description, handleCancel, handleConfirm, title }) => {
  return (
    <Styled.Wrapper>
      <Styled.Background />
      <Styled.Box>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <FieldSet>
          <Button onClick={handleConfirm} label={<T i18nKey="yes" />} />
          <Button onClick={handleCancel} label={<T i18nKey="no" />} type={BUTTON_TYPES.OUTLINE} />
        </FieldSet>
      </Styled.Box>
    </Styled.Wrapper>
  );
};

export default NavigationBackGuard;
