import React from 'react';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Imprint, Layout } from '../../components';
import Routes from '../../routes';
import { getUserName } from '../../store/selectors/user';
import useSupportExposureNotificationTracing from '../../hooks/useSupportExposureNotificationTracing';
import { Name, Paragraph } from '../../theme/typography';
import { ButtonWrapper } from './UserData.styled';
import './UserData.scss';

const UserData = ({ t }) => {
  const history = useHistory();
  const userName = useSelector(getUserName);
  const { areEnableAllServices } = useSupportExposureNotificationTracing();

  return (
    <Layout isNavigation>
      <Name>{userName},</Name>
      <Paragraph>{t('user_data_text1')}</Paragraph>
      <Imprint />
      <ButtonWrapper>
        <Button
          onClick={() => history.push(Routes.UserDataSettings)}
          label={t('user_data_text2')}
        />
        <Button
          onClick={() => history.push(Routes.UserDataChange)}
          type="outline"
          label={t('user_data_text3')}
        />
      </ButtonWrapper>
      {areEnableAllServices && (
        <ButtonWrapper>
          <Button
            onClick={() => history.push(Routes.UploadHistoricalData)}
            type="outline"
            label={t('user_data_text4')}
          />
        </ButtonWrapper>
      )}
    </Layout>
  );
};

export default withTranslation()(UserData);
