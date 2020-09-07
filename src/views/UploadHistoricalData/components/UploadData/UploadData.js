import React from 'react';
import { withTranslation } from 'react-i18next';
import PinInput from 'react-pin-input';
import { Button, InfoIcon, Layout, PhoneNumber } from '../../../../components';
import { Paragraph } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import { PinWrapper, ButtonWrapper } from '../../UploadHistoricalData.styled';

import InformationIcon from '../../../../assets/img/icons/bad.svg';
import WarningIcon from '../../../../assets/img/icons/warning.svg';

const UploadData = ({
  t,
  disableSubmitButton,
  errorMessage,
  onUploadData,
  pin,
  setPin,
  disablePinInput
}) => {
  return (
    <Layout hideBackButton isNavigation>
      <Paragraph>{t('upload_data_text1')}</Paragraph>
      <PinWrapper>
        <PinInput
          disabled={disablePinInput}
          initialValue={pin}
          focus
          length={6}
          type="text"
          onChange={value => setPin(value)}
          inputStyle={{ borderColor: Color.lightGray }}
        />
      </PinWrapper>
      {errorMessage ? (
        <InfoIcon icon={WarningIcon} className="errorMessage">
          <Paragraph color={Color.danger}>{errorMessage}</Paragraph>
        </InfoIcon>
      ) : null}
      <ButtonWrapper>
        <Button
          onClick={onUploadData}
          label={t('upload_data_text5')}
          disabled={pin.length !== 6 || disableSubmitButton || disablePinInput}
        />
      </ButtonWrapper>
      {errorMessage ? (
        <InfoIcon icon={InformationIcon}>
          <Paragraph>
            <strong>{t('upload_data_text2')}</strong>
            <br />
            {t('upload_data_text3')}{' '}
            <PhoneNumber value="800123123">800 123 123</PhoneNumber>
          </Paragraph>
        </InfoIcon>
      ) : null}
    </Layout>
  );
};

export default withTranslation()(UploadData);
