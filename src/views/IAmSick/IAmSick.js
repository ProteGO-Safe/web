import React from 'react';
import { withTranslation } from 'react-i18next';
import { TextBlockWithIcon, CallHotline, Layout, Button, T } from '../../components';
import * as Styled from './IAmSick.styled';

import CallHotlineIcon from '../../assets/img/icons/icon-contact-blue.svg';
import { ReactComponent as Icon1 } from '../../assets/img/icons/i-am-sick-icon-1.svg';
import { ReactComponent as Icon2 } from '../../assets/img/icons/i-am-sick-icon-2.svg';
import { ReactComponent as Icon3 } from '../../assets/img/icons/i-am-sick-icon-3.svg';
import { ReactComponent as Icon4 } from '../../assets/img/icons/i-am-sick-icon-4.svg';
import { ReactComponent as Icon6 } from '../../assets/img/icons/i-am-sick-icon-6.svg';
import { ReactComponent as Icon7 } from '../../assets/img/icons/i-am-sick-icon-7.svg';

const IAmSick = ({ t }) => {
  return (
    <Layout isNavigation>
      <Styled.Title>
        <T i18nKey="i_am_sick_text_1" />
      </Styled.Title>

      <Styled.Content>
        <TextBlockWithIcon icon={<Icon1 />} title={<T i18nKey="i_am_sick_text_2" />}>
          <T i18nKey="i_am_sick_text_3" />
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={<Icon2 />} title={<T i18nKey="i_am_sick_text_4" />}>
          <T i18nKey="i_am_sick_text_5" />
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={<Icon6 />} title={<T i18nKey="i_am_sick_text_6" />}>
          <T i18nKey="i_am_sick_text_7" />
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={<Icon3 />} title={<T i18nKey="i_am_sick_text_8" />}>
          <T i18nKey="i_am_sick_text_9" />
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={<Icon4 />} title={<T i18nKey="i_am_sick_text_10" />}>
          <T i18nKey="i_am_sick_text_11" />
        </TextBlockWithIcon>

        <TextBlockWithIcon icon={<Icon7 />} title={<T i18nKey="i_am_sick_text_12" />}>
          <T i18nKey="i_am_sick_text_13" />
        </TextBlockWithIcon>
      </Styled.Content>

      <CallHotline
        icon={CallHotlineIcon}
        title={<T i18nKey="i_am_sick_text_14" />}
        content={<T i18nKey="i_am_sick_text_15" />}
      />

      <Styled.Title>
        <T i18nKey="i_am_sick_text_16" />
      </Styled.Title>

      <Styled.Paragraph>
        <T i18nKey="i_am_sick_text_17" />
      </Styled.Paragraph>

      <Styled.List>
        <Styled.ListItem>
          <T i18nKey="i_am_sick_text_18" />
        </Styled.ListItem>
        <Styled.ListItem>
          <T i18nKey="i_am_sick_text_19" />
        </Styled.ListItem>
        <Styled.ListItem>
          <T i18nKey="i_am_sick_text_20" />
        </Styled.ListItem>
        <Styled.ListItem>
          <T i18nKey="i_am_sick_text_21" />
        </Styled.ListItem>
        <Styled.ListItem>
          <T i18nKey="i_am_sick_text_22" />
        </Styled.ListItem>
        <Styled.ListItem>
          <T i18nKey="i_am_sick_text_23" />
        </Styled.ListItem>
      </Styled.List>

      <Styled.ButtonWrapper>
        <Styled.UrlLink href={t('i_am_sick_text_24')} target="_blank">
          <Button label={<T i18nKey="i_am_sick_text_26" />} onClick={() => null} />
        </Styled.UrlLink>

        <Styled.Small>
          <T i18nKey="i_am_sick_text_25" />
        </Styled.Small>
      </Styled.ButtonWrapper>
    </Layout>
  );
};

export default withTranslation()(IAmSick);
