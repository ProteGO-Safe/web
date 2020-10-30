import React from 'react';
import { withTranslation } from 'react-i18next';
import * as Styled from './RouteLeavingGuard.styled';
import { FieldSet } from '../FieldSet';
import { Button } from '../index';
import { BUTTON_TYPES } from '../Button/Button.constants';

const RouteLeavingGuard = ({ callback, message, t }) => {
  const { description, title } = JSON.parse(message);

  const handleConfirm = () => callback(true);
  const handleCancel = () => callback(false);

  return (
    <Styled.Wrapper>
      <Styled.Background />
      <Styled.Box>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <FieldSet>
          <Button onClick={handleConfirm} label={t('yes')} />
          <Button
            onClick={handleCancel}
            label={t('no')}
            type={BUTTON_TYPES.OUTLINE}
          />
        </FieldSet>
      </Styled.Box>
    </Styled.Wrapper>
  );
};

export default withTranslation()(RouteLeavingGuard);
