import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  TextBlockWithIcon,
  CallHotline,
  Layout,
  PhoneNumber,
  Button
} from '../../components';
import * as Styled from './IAmSick.styled';

import CallHotlineIcon from '../../assets/img/icons/call-hotline.svg';
import Icon1 from '../../assets/img/icons/i-am-sick-icon-1.svg';
import Icon2 from '../../assets/img/icons/i-am-sick-icon-2.svg';
import Icon3 from '../../assets/img/icons/i-am-sick-icon-3.svg';
import Icon4 from '../../assets/img/icons/i-am-sick-icon-4.svg';
import Icon5 from '../../assets/img/icons/i-am-sick-icon-5.svg';

const IAmSick = ({ t }) => {
  return (
    <Layout isNavigation>
      <Styled.Title>{t('i_am_sick_main_title')}</Styled.Title>

      <CallHotline
        icon={CallHotlineIcon}
        numberPhone="222 500 115"
        title={t('call_the_hotline_title')}
        content={t('call_the_hotline_description')}
      />

      <Styled.Content>
        <TextBlockWithIcon icon={Icon1} title={t('i_am_sick_title_1')}>
          {t('i_am_sick_description_1_1')}{' '}
          <PhoneNumber>222 500 115</PhoneNumber>{' '}
          {t('i_am_sick_description_1_2')}{' '}
          <strong>{t('i_am_sick_description_remember')}</strong>
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={Icon2} title={t('i_am_sick_title_2')}>
          {t('i_am_sick_description_2')}
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={Icon3} title={t('i_am_sick_title_3')}>
          {t('i_am_sick_description_3_1')}{' '}
          <Styled.Link to="/daily">
            {t('i_am_sick_description_3_2')}
          </Styled.Link>{' '}
          {t('i_am_sick_description_3_3')}
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={Icon4} title={t('i_am_sick_title_4')}>
          {t('i_am_sick_description_4')}
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={Icon5} title={t('i_am_sick_title_5')}>
          {t('i_am_sick_description_5_1')}{' '}
          <PhoneNumber>222 500 115</PhoneNumber>{' '}
          {t('i_am_sick_description_5_2')}{' '}
          <strong>{t('i_am_sick_description_remember')}</strong>
        </TextBlockWithIcon>
      </Styled.Content>

      <Styled.ButtonWrapper>
        <Styled.UrlLink href={t('i_am_sick_button_href')} target="_blank">
          <Button label={t('i_am_sick_button_label')} onClick={() => null} />
        </Styled.UrlLink>

        <Styled.Small>{t('i_am_sick_button_info')}</Styled.Small>
      </Styled.ButtonWrapper>
    </Layout>
  );
};

export default withTranslation()(IAmSick);
