import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Collapse, Input } from '../../components';
import { Container, Content, View } from '../../theme/grid';
import {
  FaqWrapper,
  FaqIntro,
  FaqParagraph,
  FaqSubtitle,
  FaqTitle,
  FaqUppercase,
  Highlight,
  Title,
  SearchWrapper
} from './FaqPage.styled';

import SearchIcon from '../../assets/img/icons/lupa.svg';

import FaqList from './faq.json';
import Url from '../../components/Url';

const FaqPage = () => {
  const [filterText, setFilterText] = useState('');
  const { elements } = FaqList;
  const { watermark } = FaqList;

  const parseUrl = phrases =>
    phrases.map((phrase, index) => {
      const part = phrase.split(/\|/);

      return part.length > 1 ? (
        <Url key={index} value={part[1]}>
          {part[0]}
        </Url>
      ) : (
        part
      );
    });

  const renderLine = line => {
    const phrases = line.split(/\[url\]/);

    return parseUrl(phrases);
  };

  const highlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, key) => {
      const test = part.toLowerCase() === highlight.toLowerCase();
      return test ? <Highlight key={key}>{part}</Highlight> : part;
    });
  };

  const renderElement = (line, index) => {
    switch (line.type) {
      case 'intro': {
        return <FaqIntro key={index}>{line.content.text}</FaqIntro>;
      }
      case 'title': {
        return (
          <FaqTitle key={index} className="title">
            {filterText
              ? highlightedText(line.content.text, filterText)
              : line.content.text}
          </FaqTitle>
        );
      }
      case 'subtitle': {
        return (
          <FaqSubtitle>
            {filterText
              ? highlightedText(line.content.text, filterText)
              : line.content.text}
          </FaqSubtitle>
        );
      }
      case 'paragraph_strong': {
        return (
          <FaqUppercase key={index}>
            {filterText
              ? highlightedText(line.content.text, filterText)
              : line.content.text}
          </FaqUppercase>
        );
      }
      case 'paragraph': {
        return (
          <FaqParagraph key={index}>
            {filterText
              ? highlightedText(line.content.text, filterText)
              : renderLine(line.content.text)}
          </FaqParagraph>
        );
      }
      case 'details': {
        const title = filterText
          ? highlightedText(line.content.text, filterText)
          : line.content.text;
        const details = filterText
          ? highlightedText(line.content.reply, filterText)
          : renderLine(line.content.reply);
        return (
          <Collapse
            key={index}
            title={title}
            className="collapse"
            forceOpen={filterText.length >= '3'}
          >
            {details}
          </Collapse>
        );
      }
      default:
        return null;
    }
  };
  const filteredElements = elements.filter(
    line =>
      line.content.text.toLocaleLowerCase().includes(filterText) ||
      line.content.reply.toLocaleLowerCase().includes(filterText)
  );
  const handleChangeInput = e => {
    const { value } = e.target;
    setFilterText(value.toLocaleLowerCase());
  };

  const elementsToDisplay =
    filterText.length >= '3' ? filteredElements : elements;

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Title>Pytania i odpowiedzi</Title>
          <FaqWrapper>
            {elements
              .filter(line => line.type === 'intro')
              .map((line, index) => renderElement(line, index))}
            <SearchWrapper>
              <Input
                icon={SearchIcon}
                type="text"
                name="search"
                placeholder="Szukaj wśród pytań"
                value={filterText}
                onChange={handleChangeInput}
              />
            </SearchWrapper>
            {elementsToDisplay
              .filter(line => line.type !== 'intro')
              .map((line, index) => renderElement(line, index))}
            <p className="watermark faq">{watermark}</p>
          </FaqWrapper>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default FaqPage;
