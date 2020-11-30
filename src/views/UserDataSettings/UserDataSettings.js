import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Layout } from '../../components';
import { ModalContent } from './components';
import useModalContext from '../../hooks/useModalContext';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { Paragraph } from '../../theme/typography';
import { Box, BoxTitle, Title } from './userDataSettings.styled';

import warning from '../../assets/img/icons/warning.svg';

const UserDataSettings = ({ t }) => {
  const { openModal } = useModalContext();

  const handleClick = () =>
    openModal({
      value: t('modal_content_text2'),
      modalTitle: t('modal_content_text1'),
      modalFooter: <ModalContent />
    });

  return (
    <Layout isNavigation>
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
    </Layout>
  );
};

export default withTranslation()(UserDataSettings);
