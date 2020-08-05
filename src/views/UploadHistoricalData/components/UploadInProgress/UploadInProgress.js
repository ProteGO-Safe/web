import React from 'react';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserName } from '../../../../store/selectors/user';
import { Header, Loader } from '../../../../components';
import { BottomNavigation } from '../../../../components/BottomNavigation';
import { Container, Content, View } from '../../../../theme/grid';
import { Name, Paragraph, TextLink } from '../../../../theme/typography';
import { Information, LoaderWrapper } from './UploadInProgress.styled';
import Routes from '../../../../routes';

const UploadInProgress = ({ t }) => {
  const userName = useSelector(getUserName);

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Name>{userName},</Name>
          <Paragraph>{t('upload_in_progress_text1')}</Paragraph>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
          <Information>
            {t('upload_in_progress_text2')}
            <Link to={Routes.PrivacyPolicy}>
              <TextLink>{t('upload_in_progress_text3')}</TextLink>.
            </Link>
          </Information>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default withTranslation()(UploadInProgress);
