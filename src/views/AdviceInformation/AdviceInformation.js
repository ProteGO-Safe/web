import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Routes from '../../routes';
import { Collapse, Button, FieldSet, PhoneNumber } from '../../components';
import {
  CollapseWrapper,
  List,
  ListItem,
  Paragraph,
  Title,
  Warning,
  WarningLabel,
  Watermark,
  LinkStyle
} from './AdviceInformation.styled';
import './AdviceInformation.scss';

import IconWarning from '../../assets/img/icons/warning.svg';
import IconAdviceHome from '../../assets/img/icons/zostan-w-domu.svg';
import IconAdvicePhone from '../../assets/img/icons/seniorzy.svg';
import IconAdviceNote from '../../assets/img/icons/dziennik.svg';

const AdviceInformation = ({ t, collapse, watermark }) => {
  const history = useHistory();

  const renderCollapse = collapse.map((item, i) => {
    const { title, reply } = item;
    return (
      <Collapse key={i} title={title}>
        <Paragraph>
          <span
            dangerouslySetInnerHTML={{
              __html: reply
            }}
          />
        </Paragraph>
      </Collapse>
    );
  });

  return (
    <>
      <Title>{t('advice_information_text2')}</Title>
      <List>
        <ListItem>
          <img src={IconAdviceHome} alt={t('advice_information_text1')} />
          <p>{t('advice_information_text1')}</p>
        </ListItem>
        <ListItem>
          <img src={IconAdvicePhone} alt={t('advice_information_text1')} />
          <p>{t('advice_information_text2')}</p>
        </ListItem>
        <ListItem>
          <img src={IconAdviceNote} alt={t('advice_information_text1')} />
          <p>
            {t('advice_information_text4')}{' '}
            <LinkStyle onClick={() => history.push(Routes.Daily)}>
              {t('advice_information_text5')}
            </LinkStyle>
            {t('advice_information_text6')}
          </p>
        </ListItem>
      </List>
      <CollapseWrapper>{renderCollapse}</CollapseWrapper>
      <Watermark>{watermark}</Watermark>
      <Warning>
        <WarningLabel>
          <img src={IconWarning} alt={t('advice_information_text7')} />
          {t('advice_information_text7')}
        </WarningLabel>
        <Paragraph>
          {t('advice_information_text8')}{' '}
          <PhoneNumber value="222500115">
            {t('advice_information_text9')}
          </PhoneNumber>{' '}
          {t('advice_information_text10')}
        </Paragraph>
      </Warning>
      <FieldSet>
        <Button onClick={() => history.push(Routes.Home)} label="OK" />
      </FieldSet>
    </>
  );
};

export default withTranslation()(AdviceInformation);
