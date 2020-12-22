import React from 'react';
import { Button, Layout, T } from '../../components';
import { ModalContent } from './components';
import useModalContext from '../../hooks/useModalContext';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { Paragraph } from '../../theme/typography';
import { Box, BoxTitle, Title } from './userDataSettings.styled';

import warning from '../../assets/img/icons/warning.svg';

const UserDataSettings = () => {
  const { openModal } = useModalContext();

  const handleClick = () =>
    openModal({
      value: <T i18nKey="modal_content_text2" />,
      modalTitle: <T i18nKey="modal_content_text1" />,
      modalFooter: <ModalContent />
    });

  return (
    <Layout isNavigation>
      <Title>
        <T i18nKey="user_data_settings_text1" />
      </Title>
      <Box>
        <BoxTitle>
          <img src={warning} alt={<T i18nKey="user_data_settings_text2" />} />
          <T i18nKey="user_data_settings_text2" />
        </BoxTitle>
        <Paragraph>
          <T i18nKey="user_data_settings_text3" />
        </Paragraph>
      </Box>
      <Actions>
        <Button onClick={handleClick} label={<T i18nKey="user_data_settings_text4" />} type="outline" />
      </Actions>
    </Layout>
  );
};

export default UserDataSettings;
