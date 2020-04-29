import React from 'react';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Collapse } from '../../components';
import { Container, Content, View } from '../../theme/grid';
import {
  FaqWrapper,
  FaqIntro,
  FaqParagraph,
  FaqSubtitle,
  FaqTitle,
  FaqUppercase,
  Title
} from './FaqPage.styled';

import FaqList from './faq.json';
import Url from '../../components/Url';

const FaqPage = () => {
  const { elements } = FaqList;
  const { watermark } = FaqList;

  const covidUrl = (
    <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
  );

  const renderReply = (phrases = []) => {
    return phrases.reduce((acc, phrase) => {
      if (acc === null) {
        return phrase;
      }
      return (
        <>
          {acc} {covidUrl} {phrase}
        </>
      );
    }, null);
  };

  const renderElement = (line, index) => {
    switch (line.type) {
      case 'intro': {
        return <FaqIntro key={index}>{line.content.text}</FaqIntro>;
      }
      case 'title': {
        return <FaqTitle key={index}>{line.content.text}</FaqTitle>;
      }
      case 'subtitle': {
        return <FaqSubtitle>{line.content.text}</FaqSubtitle>;
      }
      case 'paragraph_strong': {
        return <FaqUppercase key={index}>{line.content.text}</FaqUppercase>;
      }
      case 'paragraph': {
        return <FaqParagraph key={index}>{line.content.text}</FaqParagraph>;
      }
      case 'details': {
        const string = line.content.text;
        const stringParse = string.split(/\s+/).join(' ');
        const { reply } = line.content;
        const phrases = reply.split('COVID-19');

        return (
          <Collapse key={index} title={stringParse}>
            {renderReply(phrases)}
          </Collapse>
        );
      }
      default:
        return null;
    }
  };

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Title>Pytania i odpowiedzi</Title>
          <FaqWrapper>
            {elements.map((line, index) => renderElement(line, index))}
            <p className="watermark faq">{watermark}</p>
          </FaqWrapper>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default FaqPage;
