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
            dziękujemy, że myślisz o innych. Jesteś odpowiedzialna/-y i
            solidarna/-y. Informacja o ryzyku kontaktu z koronawirusem trafi na
            urządzenia osób, z którymi się widziałaś/widziałeś.
          </Paragraph>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
          <Information>
            Dbamy o Twoją prywatność i bezpieczeństwo Twoich danych.
            Przekazujesz informacje w pełni anonimowo. Nie ma możliwości, by
            ktokolwiek mógł Cię zidentyfikować. Więcej informacji znajdziesz
            w&nbsp;
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
