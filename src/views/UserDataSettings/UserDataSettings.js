import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../components';
import { ModalContent } from './components';
import useModalContext from '../../hooks/useModalContext';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { Container, Content, View } from '../../theme/grid';
import { Paragraph, Title } from '../../theme/typography';
import { Box, BoxTitle } from './userDataSettings.styled';
import warning from '../../assets/img/icons/warning.svg';

const UserDataSettings = ({ t }) => {
  const { openModal } = useModalContext();
  const handleClick = () => openModal(<ModalContent />, 'dialog');

  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>{t('user_data_settings_text1')}</Title>
          <Box>
            <BoxTitle>
              <img src={warning} alt={t('user_data_settings_text2')} />
              {t('user_data_settings_text2')}
            </BoxTitle>
            <Paragraph>{t('user_data_settings_text3')}</Paragraph>
          </Box>
          <Actions>
            <Button onClick={handleClick} label={t('user_data_settings_text4')} type="outline" />
          </Actions>
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

export default withTranslation()(UserDataSettings);
