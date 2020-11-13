import React from 'react';
import { withTranslation } from 'react-i18next';
import { Layout, Loader, NavLink } from '../../../../components';
import { Name, Paragraph, TextLink } from '../../../../theme/typography';
import { Information, LoaderWrapper } from './UploadInProgress.styled';
import useUserName from '../../../../hooks/useUserName';
import { Routes } from '../../../../services/navigationService/routes';

const UploadInProgress = ({ t }) => {
  const userName = useUserName();

  return (
    <Layout hideBackButton isNavigation>
      <Name>{userName},</Name>
      <Paragraph>{t('upload_in_progress_text1')}</Paragraph>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      <Information>
        {t('upload_in_progress_text2')}{' '}
        <NavLink to={Routes.PrivacyPolicy}>
          <TextLink>{t('upload_in_progress_text3')}</TextLink>.
        </NavLink>
      </Information>
    </Layout>
  );
};

export default withTranslation()(UploadInProgress);
