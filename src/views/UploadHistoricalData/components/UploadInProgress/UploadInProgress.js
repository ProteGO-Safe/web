import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Layout, Loader } from '../../../../components';
import { Name, Paragraph, TextLink } from '../../../../theme/typography';
import { Information, LoaderWrapper } from './UploadInProgress.styled';
import Routes from '../../../../routes';
import useUserName from '../../../../hooks/useUserName';

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
        <Link to={Routes.PrivacyPolicy}>
          <TextLink>{t('upload_in_progress_text3')}</TextLink>.
        </Link>
      </Information>
    </Layout>
  );
};

export default withTranslation()(UploadInProgress);
