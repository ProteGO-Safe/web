import React from 'react';
import { Layout, Loader, NavLink, T } from '../../../../components';
import { Name, Paragraph, TextLink } from '../../../../theme/typography';
import { Information, LoaderWrapper } from './UploadInProgress.styled';
import useUserName from '../../../../hooks/useUserName';
import { Routes } from '../../../../services/navigationService/routes';

const UploadInProgress = () => {
  const userName = useUserName();

  return (
    <Layout hideBackButton isNavigation>
      <Name>{userName},</Name>
      <Paragraph>
        <T i18nKey="upload_in_progress_text1" />
      </Paragraph>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      <Information>
        <T i18nKey="upload_in_progress_text2" />{' '}
        <NavLink to={Routes.PrivacyPolicy}>
          <TextLink>
            <T i18nKey="upload_in_progress_text3" />
          </TextLink>
          .
        </NavLink>
      </Information>
    </Layout>
  );
};

export default UploadInProgress;
