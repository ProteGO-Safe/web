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

const FaqPage = () => {
  const { elements } = FaqList;
  const { watermark } = FaqList;

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
        return (
          <Collapse key={index} title={stringParse}>
            {line.content.reply}
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
