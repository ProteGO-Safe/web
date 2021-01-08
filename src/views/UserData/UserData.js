import React from 'react';
import { Button, Imprint, Layout, T } from '../../components';
import useSupportExposureNotificationTracing from '../../hooks/useSupportExposureNotificationTracing';
import { Name, Paragraph } from '../../theme/typography';
import { ButtonWrapper } from './UserData.styled';
import useUserName from '../../hooks/useUserName';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const UserData = () => {
  const { goTo } = useNavigation();
  const userName = useUserName();
  const { areEnableAllServices } = useSupportExposureNotificationTracing();

  return (
    <Layout isNavigation>
      <Name>{userName},</Name>
      <Paragraph>
        <T i18nKey="user_data_text1" />
      </Paragraph>
      <Imprint />
      <ButtonWrapper>
        <Button onClick={() => goTo(Routes.UserDataSettings)} label={<T i18nKey="user_data_text2" />} />
        <Button onClick={() => goTo(Routes.UserDataChange)} type="outline" label={<T i18nKey="user_data_text3" />} />
      </ButtonWrapper>
      {areEnableAllServices && (
        <ButtonWrapper>
          <Button
            onClick={() => goTo(Routes.UploadHistoricalData)}
            type="outline"
            label={<T i18nKey="user_data_text4" />}
          />
        </ButtonWrapper>
      )}
    </Layout>
  );
};

export default UserData;
