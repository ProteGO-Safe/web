import React, { useEffect, useRef, useState } from 'react';
import { Prompt, Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PinInput from 'react-pin-input';
import Routes from '../../../../routes';
import { FieldSet } from '../../../../components/FieldSet';
import { Button, Warning } from '../../../../components';
import * as Styled from '../../LabTest.styled';
import { Color } from '../../../../theme/colors';
import { BUTTON_TYPES } from '../../../../components/Button/Button.constants';
import useLabTestPinBan from '../../../../hooks/useLabTestPinBan';

const Step2 = ({
  completedSteps,
  isInvalidPin,
  loader,
  onReset,
  onSubmit,
  pin,
  setPin,
  t
}) => {
  const pinInputRef = useRef();

  const [isSending, setIsSending] = useState(false);

  const [shouldConfirmNavigation, setShouldConfirmNavigation] = useState(false);
  const confirmNavigationMessage = JSON.stringify({
    title: t('lab_test_text23'),
    description: t('lab_test_text24')
  });

  const { message: banMessage, isBanned } = useLabTestPinBan();

  const isConfirmBtnDisabled = !pin || (pin && pin.toString().length < 6);

  const handleSubmit = () => {
    setShouldConfirmNavigation(false);
    setIsSending(true);
  };

  useEffect(() => {
    // Reset inputs on invalid pin
    if (pinInputRef && pinInputRef.current && isInvalidPin) {
      pinInputRef.current.clear();
    }
  }, [isInvalidPin, pinInputRef]);

  useEffect(() => {
    // check confirm navigation
    if (!loader) {
      setIsSending(false);
      setShouldConfirmNavigation(!!(pin && pin.toString().length));
    }
  }, [loader, pin]);

  useEffect(() => {
    // send form
    if (isSending) {
      onSubmit();
    }
    // eslint-disable-next-line
  }, [isSending]);

  if (completedSteps !== 1) {
    onReset();
    return <Redirect to={`${Routes.LabTest}/1`} />;
  }

  return (
    <>
      <Styled.Content>
        <Styled.SubTitle>{t('lab_test_text6')}</Styled.SubTitle>
        <Styled.List>
          <Styled.ListItem>{t('lab_test_text7')}</Styled.ListItem>
          <Styled.ListItem>{t('lab_test_text8')}</Styled.ListItem>
        </Styled.List>
      </Styled.Content>
      <Styled.LabTestPin>
        <Styled.LabTestPinTitle>{t('lab_test_text9')}</Styled.LabTestPinTitle>
        <PinInput
          disabled={false}
          focus
          initialValue={pin}
          inputStyle={{ borderColor: Color.lightGray }}
          length={6}
          ref={pinInputRef}
          type="text"
          onChange={value => setPin(value)}
        />
      </Styled.LabTestPin>
      {isInvalidPin && (
        <>
          <Styled.WarningWrapper>
            <Warning
              borderColor={Color.danger}
              colorFont={Color.danger}
              status="error"
              title={
                t('lab_test_text12') && banMessage}
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
      <Prompt
        message={confirmNavigationMessage}
        when={shouldConfirmNavigation}
      />
    </>
  );
};

export default withTranslation()(Step2);
