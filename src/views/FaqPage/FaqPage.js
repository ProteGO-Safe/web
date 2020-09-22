import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, Input, Layout, Url } from '../../components';
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
import SearchIcon from '../../assets/img/icons/lupa.svg';
import search from '../../utils/faqSearcher';
import faqData from './faq.json';
import { Color } from '../../theme/colors';
import useLanguage from '../../hooks/useLanguage';

const escapedCharacters = new RegExp('[{}()\\[\\].+*?^$\\\\|]', 'g');

const FaqPage = ({ t }) => {
  const { isDefaultLanguage, language } = useLanguage();
  const [filterText, setFilterText] = useState('');

  if (!faqData) {
    return null;
  }

  const { watermark, elements = [], intro } = faqData;

  const highlightComponent = (text, key) => (
    <Highlight key={key}>{text}</Highlight>
  );
  const highlightHtml = (text, key) =>
    `<mark style="display: inline; background-color:${Color.info}">${text}</mark>`;

  const findAndHighlightTexts = (element, highlighting) => {
    if (filterText.length < 3) {
      return [element];
    }
    const escapedValueToSearch = filterText.replace(
      escapedCharacters,
      '\\\\$0'
    );
    const inArray = element.split(
      new RegExp(`(${escapedValueToSearch})`, 'gi')
    );
    return inArray.map((part, key) => {
      const exists = part.toLowerCase() === filterText.toLowerCase();
      return exists ? highlighting(part, key) : part;
    });
  };

  const findAndMarkTexts = element => {
    return findAndHighlightTexts(element, highlightComponent);
  };

  const findAndMarkHtmlTexts = element => {
    return findAndHighlightTexts(element, highlightHtml).join('');
  };

  const handleResetInput = () => {
    setFilterText('');
  };

  const handleChangeInput = e => {
    const { value } = e.target;
    setFilterText(value.toLocaleLowerCase());
  };

  const elementsToDisplay = search(filterText, elements).map(
    (element, elementId) => {
      return (
        <FaqItem key={elementId}>
          {element.show && (
            <FaqTitle>{findAndMarkTexts(element.title)}</FaqTitle>
          )}
          {element.paragraphs.map((paragraph, paragraphId) => {
            const p = paragraph.paragraph;
            return (
              <FaqContent key={paragraphId}>
                {paragraph.show && (
                  <FaqUppercase>{findAndMarkTexts(p)}</FaqUppercase>
                )}
                {paragraph.collapses.map((collapse, collapseId) => {
                  const { description, forceOpen, text } = collapse;
                  const formattedDescription = findAndMarkHtmlTexts(
                    description
                  );
                  return (
                    <Collapse
                      key={collapseId}
                      title={findAndMarkTexts(text)}
                      className="collapse"
                      forceOpen={forceOpen}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: formattedDescription
                        }}
                      />
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

  const resolveExternalFaqUrl = () => {
    if (language === 'en') {
      return 'https://www.gov.pl/web/coronavirus';
    }
    if (language === 'uk') {
      return 'https://www.gov.pl/web/coronavirus-ua';
    }
    return '';
  };

  return (
    <Layout hideBackButton isNavigation>
      <Title>{t('faq_page_text1')}</Title>
      <FaqWrapper>
        {isDefaultLanguage ? (
          <>
            <FaqIntro>{intro}</FaqIntro>
            <SearchWrapper>
              <Input
                reset={handleResetInput}
                icon={SearchIcon}
                type="text"
                name="search"
                placeholder={t('faq_page_text2')}
                value={filterText}
                onChange={handleChangeInput}
              />
            </SearchWrapper>
            {elementsToDisplay}
            <Watermark>{watermark}</Watermark>
          </>
        ) : (
          <>
            {t('faq_page_text3')}
            <br />
            <br />
            <Url>{resolveExternalFaqUrl()}</Url>
          </>
        )}
      </FaqWrapper>
    </Layout>
  );
};

export default withTranslation()(FaqPage);
