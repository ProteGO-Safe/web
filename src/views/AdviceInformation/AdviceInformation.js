import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Routes from '../../routes';
import { Collapse, Button, FieldSet, PhoneNumber, Url } from '../../components';
import {
  CollapseWrapper,
  List,
  ListItem,
  Paragraph,
  RepliesList,
  RepliesListItem,
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
import IconAdviceCountry from '../../assets/img/icons/przyjazd.svg';
import IconAdviceNote from '../../assets/img/icons/dziennik.svg';

const AdviceInformation = ({ t, collapse, title, watermark }) => {
  const history = useHistory();

  const parseUrl = phrases =>
    phrases.map((phrase, index) => {
      const part = phrase.split(/\|/);
      return part.length > 1 ? (
        <Url key={index} value={part[1]}>
          <strong>{part[0]}</strong>
        </Url>
      ) : (
        part
      );
    });
  const renderLine = line => {
    const phrases = line.split(/\[url\]/);
    return parseUrl(phrases);
  };

  const renderCollapse = collapse.map((item, i) => {
    const repliesLength = item.replies.length;
    return (
      <Collapse key={i} title={item.title}>
        {repliesLength > '1' ? (
          <RepliesList>
            {item.replies.map((reply, key) => (
              <RepliesListItem key={key}>{renderLine(reply)}</RepliesListItem>
            ))}
          </RepliesList>
        ) : (
          <>
            {item.replies.map((reply, key) => (
              <Paragraph key={key}>{renderLine(reply)}</Paragraph>
            ))}
          </>
        )}
      </Collapse>
    );
  });

  return (
    <>
      <Title>{title}</Title>
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
          <img src={IconAdviceCountry} alt={t('advice_information_text1')} />
          <p>{t('advice_information_text3')}</p>
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
          <PhoneNumber value="800190590">
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
