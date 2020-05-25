import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Content, View } from '../../theme/grid';
import { Header, BottomNavigation, Collapse, Input } from '../../components';
import {
  FaqIntro,
  FaqTitle,
  FaqItem,
  FaqContent,
  FaqUppercase,
  FaqWrapper,
  SearchWrapper,
  Title,
  Watermark,
  Highlight
} from './FaqPage.styled';
import { fetchFaq, clearError } from '../../store/actions/externalData';
import SearchIcon from '../../assets/img/icons/lupa.svg';
import Url from '../../components/Url';
import useLoaderContext from '../../hooks/useLoaderContext';
import search from '../../utils/faqSearcher';
import Routes from '../../routes';

const FaqPage = () => {
  const history = useHistory();
  const { faqData, isFetching, error } = useSelector(
    state => state.externalData
  );
  const { setLoader } = useLoaderContext();
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    if (isFetching) {
      setLoader(true);
      return;
    }
    setLoader(false);
  }, [isFetching, setLoader]);

  useEffect(() => {
    if (!faqData && !error) {
      dispatch(fetchFaq());
    }
  }, [faqData, error, dispatch]);

  if (error) {
    dispatch(clearError());
    history.push(Routes.Error);
  }

  if (!faqData) {
    return null;
  }

  const { watermark, elements = [], intro } = faqData;

  const findAndMarkTexts = (element, valueToSearch) => {
    const inArray = element.split(new RegExp(`(${valueToSearch})`, 'gi'));
    return inArray.map((part, key) => {
      const test = part.toLowerCase() === valueToSearch.toLowerCase();
      return test ? <Highlight key={key}>{part}</Highlight> : part;
    });
  };

  const handleResetInput = () => {
    setFilterText('');
  };

  const handleChangeInput = e => {
    const { value } = e.target;
    setFilterText(value.toLocaleLowerCase());
  };

  const parseUrl = phrases =>
    phrases.map((phrase, index) => {
      const part = phrase.split(/\|/);
      return part.length > 1 ? (
        <Url key={index} value={part[1]}>
          {filterText.length >= '3'
            ? findAndMarkTexts(part[0], filterText)
            : part[0]}
        </Url>
      ) : filterText.length >= '3' ? (
        findAndMarkTexts(part[0], filterText)
      ) : (
        part[0]
      );
    });

  const renderLine = line => {
    const phrases = line.split(/\[url\]/);
    return parseUrl(phrases);
  };

  const elementsToDisplay = search(filterText, elements).map(
    (element, elementId) => {
      return (
        <FaqItem key={elementId}>
          {element.show && <FaqTitle>{renderLine(element.title)}</FaqTitle>}
          {element.paragraphs.map((paragraph, paragraphId) => {
            const p = paragraph.paragraph;
            return (
              <FaqContent key={paragraphId}>
                {paragraph.show && <FaqUppercase>{renderLine(p)}</FaqUppercase>}
                {paragraph.collapses.map((collapse, collapseId) => {
                  return (
                    <Collapse
                      key={collapseId}
                      title={renderLine(collapse.text)}
                      className="collapse"
                      forceOpen={collapse.forceOpen}
                    >
                      {renderLine(collapse.description)}
                    </Collapse>
                  );
                })}
              </FaqContent>
            );
          })}
        </FaqItem>
      );
    }
  );

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Title>Pytania i odpowiedzi</Title>
          <FaqWrapper>
            <FaqIntro>{intro}</FaqIntro>
            <SearchWrapper>
              <Input
                reset={handleResetInput}
                icon={SearchIcon}
                type="text"
                name="search"
                placeholder="Szukaj wśród pytań"
                value={filterText}
                onChange={handleChangeInput}
              />
            </SearchWrapper>
            {elementsToDisplay}
            <Watermark>{watermark}</Watermark>
          </FaqWrapper>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default FaqPage;
