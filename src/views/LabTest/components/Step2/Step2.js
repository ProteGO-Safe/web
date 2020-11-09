import React, { useEffect, useRef } from 'react';
import { withTranslation } from 'react-i18next';
import { FieldSet } from '../../../../components/FieldSet';
import { Button, Pin, Warning } from '../../../../components';
import * as Styled from '../../LabTest.styled';
import { Color } from '../../../../theme/colors';
import { BUTTON_TYPES } from '../../../../components/Button/Button.constants';
import useLabTestPinBan from '../../../../hooks/useLabTestPinBan';

const Step2 = ({ isInvalidPin, onReset, onSubmit, pin, setPin, t }) => {
  const pinInputRef = useRef();

  const { message: banMessage, isBanned } = useLabTestPinBan();

  const isConfirmBtnDisabled = !pin || (pin && pin.toString().length < 6);

  const handleSubmit = () => {
    onSubmit();
  };

  useEffect(() => {
    // Reset inputs on invalid pin
    if (pinInputRef && pinInputRef.current && isInvalidPin) {
      pinInputRef.current.clear();
    }
  }, [isInvalidPin, pinInputRef]);

  return (
    <>
      <Styled.Content>
        <Styled.SubTitle>{t('lab_test_text6')}</Styled.SubTitle>
        <Styled.List>
          <Styled.ListItem>{t('lab_test_text7')}</Styled.ListItem>
          <Styled.ListItem>{t('lab_test_text8')}</Styled.ListItem>
        </Styled.List>
      </Styled.Content>
      <Pin
        initialValue={pinInputRef.current}
        onChange={value => setPin(value)}
        pinInputRef={pinInputRef}
        title={t('lab_test_text9')}
      />
      {isInvalidPin && (
        <>
          <Styled.WarningWrapper>
            <Warning
              borderColor={Color.danger}
              colorFont={Color.danger}
              status="error"
              title={t('lab_test_text12') && banMessage}
            />
          </Styled.WarningWrapper>
          <Styled.Content>
            <Styled.SubTitle>{t('lab_test_text13')}</Styled.SubTitle>
            <Styled.List>
              <Styled.ListItem>{t('lab_test_text14')}</Styled.ListItem>
              <Styled.ListItem>{t('lab_test_text15')}</Styled.ListItem>
            </Styled.List>
          </Styled.Content>
        </>
      )}
      <FieldSet>
        <Button
          disabled={isConfirmBtnDisabled || isBanned}
          onClick={handleSubmit}
          label={t('button_confirm')}
        />
        {isInvalidPin && (
          <Button
            onClick={onReset}
            label={t('lab_test_text17')}
            type={BUTTON_TYPES.OUTLINE}
          />
        )}
      </FieldSet>
    </>
  );
};

export default withTranslation()(Step2);
