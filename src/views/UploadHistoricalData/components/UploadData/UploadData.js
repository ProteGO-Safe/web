import React, { useEffect } from 'react';
import InformationIcon from '../../../../assets/img/icons/bad.svg';
import { Button, InfoIcon, Layout, Pin, T, Warning, WarningInEuropeTerm } from '../../../../components';
import { H5, Paragraph, SmallText, TextLink } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import { ButtonWrapper } from '../../UploadHistoricalData.styled';
import useModalContext from '../../../../hooks/useModalContext';
import * as Styled from './UploadData.styled';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const UploadData = ({
  disableSubmitButton,
  disablePinInput,
  errorMessage,
  errorMessageVisible,
  handleBack,
  hideErrorMessage,
  onUploadData,
  pin,
  setPin
}) => {
  const { openModal } = useModalContext();
  const { goTo } = useNavigation();

  useEffect(() => {
    return () => {
      hideErrorMessage();
    };
    // eslint-disable-next-line
  }, []);

  const handleOpenModal = () => {
    openModal({
      value: <T i18nKey="upload_data_popup_4" />,
      modalTitle: <T i18nKey="upload_data_popup_3" />
    });
  };

  return (
    <Layout isNavigation onBackClick={handleBack} hideBell>
      <Styled.Content>
        <H5>
          <T i18nKey="upload_data_text_1" />{' '}
        </H5>
        <SmallText>
          <T i18nKey="upload_data_text_2" />{' '}
          <TextLink onClick={handleOpenModal}>
            <T i18nKey="upload_data_text_3" />
          </TextLink>{' '}
          <T i18nKey="upload_data_text_4" />
        </SmallText>
        <SmallText>
          <T i18nKey="upload_data_text_5" />
        </SmallText>
      </Styled.Content>

      <WarningInEuropeTerm />

      <Styled.PinWrapper>
        <Pin initialValue={pin} onChange={value => setPin(value)} title={<T i18nKey="upload_data_text_8" />} />
      </Styled.PinWrapper>

      {errorMessage && errorMessageVisible ? (
        <Styled.Warning>
          <Warning borderColor={Color.danger} colorFont={Color.danger} status="error" title={errorMessage} />
        </Styled.Warning>
      ) : null}

      <ButtonWrapper>
        <Button
          onClick={onUploadData}
          label={<T i18nKey="upload_data_text_9" />}
          disabled={!pin || pin.length !== 6 || disableSubmitButton || disablePinInput}
        />
        <Button onClick={() => goTo(Routes.PinReceiver)} label={<T i18nKey="upload_data_text_11" />} type="outline" />
      </ButtonWrapper>

      {errorMessage && errorMessageVisible ? (
        <Styled.Info>
          <InfoIcon icon={InformationIcon}>
            <Paragraph>
              <T i18nKey="upload_data_text_10" />
            </Paragraph>
          </InfoIcon>
        </Styled.Info>
      ) : null}
    </Layout>
  );
};

export default UploadData;
