import React from 'react';
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
import IconAdviceNote from '../../assets/img/icons/dziennik.svg';

const AdviceInformation = ({ collapse, title, watermark }) => {
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
          <img src={IconAdviceHome} alt="Ikonka" />
          <p>Zostań w domu.</p>
        </ListItem>
        <ListItem>
          <img src={IconAdvicePhone} alt="Ikonka" />
          <p>
            Zadzwoń do rodziców i krewnych w podeszłym wieku. Pomóż im korzystać
            z ProteGo Safe na ich telefonie. Zrób dla nich zakupy. Unikaj
            kontaktu osobistego.
          </p>
        </ListItem>
        <ListItem>
          <img src={IconAdviceNote} alt="Ikonka" />
          <p>
            Regularnie uzupełniaj zakładkę{' '}
            <LinkStyle onClick={() => history.push(Routes.Daily)}>
              MÓJ DZIENNIK ZDROWIA
            </LinkStyle>
            : zapisuj w aplikacji objawy i temperaturę ciała.
          </p>
        </ListItem>
      </List>
      <CollapseWrapper>{renderCollapse}</CollapseWrapper>
      <Watermark>{watermark}</Watermark>
      <Warning>
        <WarningLabel>
          <img src={IconWarning} alt="Ważne" />
          Ważne
        </WarningLabel>
        <Paragraph>
          Jeśli u Ciebie lub Twoich bliskich wystąpią objawy zakażenia
          koronawirusem, zadzwoń na darmową, całodobową infolinię{' '}
          <PhoneNumber value="222500115">222 500 115</PhoneNumber> lub do
          lokalnej placówki służby zdrowia.
        </Paragraph>
      </Warning>
      <FieldSet>
        <Button onClick={() => history.push(Routes.Home)} text="OK" />
      </FieldSet>
    </>
  );
};

export default AdviceInformation;
