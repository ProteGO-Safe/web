import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserName } from '../../../../store/selectors/user';
import { Header, Loader } from '../../../../components';
import { BottomNavigation } from '../../../../components/BottomNavigation';
import { Container, Content, View } from '../../../../theme/grid';
import { Name, Paragraph, TextLink } from '../../../../theme/typography';
import { Information, LoaderWrapper } from './UploadInProgress.styled';
import Routes from '../../../../routes';

const UploadInProgress = () => {
  const userName = useSelector(getUserName);

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Name>{userName},</Name>
          <Paragraph>
            Zaczekaj proszę, twoje diagnosis keys są właśnie wysyłane na serwer.
          </Paragraph>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
          <Information>
            Nie przekazujemy informacji, które umożliwią Twoją identyfikację.
            Szczegóły dotyczące tego procesu znajdziesz w&nbsp;
            <Link to={Routes.PrivacyPolicy}>
              <TextLink>Polityce prywatności</TextLink>.
            </Link>
          </Information>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default UploadInProgress;
