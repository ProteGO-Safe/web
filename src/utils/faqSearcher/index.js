import flatten from 'flat';

const showAll = elements => {
  return elements.map(element => {
    const paragraphs = element.paragraphs.map(paragraph => {
      const collapses = paragraph.collapses.map(collapse => ({
        ...collapse,
        forceOpen: false
      }));
      return {
        ...paragraph,
        show: paragraph.paragraph !== '',
        collapses
      };
    });
    return { ...element, show: true, paragraphs };
  });
};

const collapseHasText = (collapse, search) => {
  const { text, description } = collapse;
  return (
    text.toLowerCase().includes(search) ||
    description.toLowerCase().includes(search)
  );
};

const showAllParagraphs = (paragraphs, search) => {
  return paragraphs.map(paragraph => {
    const collapses = paragraph.collapses.map(collapse => {
      return { ...collapse, forceOpen: collapseHasText(collapse, search) };
    });
    return { ...paragraph, show: false, collapses };
  });
};

const showParagraphsWithSearchedCollapses = (paragraphs, search) => {
  return paragraphs
    .filter(paragraph => {
      const { collapses } = paragraph;
      return Object.values(flatten(collapses)).some(value =>
        value.toLowerCase().includes(search)
      );
    })
    .map(paragraph => {
      const collapses = paragraph.collapses
        .filter(collapse => collapseHasText(collapse, search))
        .map(collapse => ({ ...collapse, forceOpen: true }));
      return { ...paragraph, show: false, collapses };
    });
};

const titleHasText = (title, text) => title.toLowerCase().includes(text);

const someCollapseHasText = (element, text) => {
  const { paragraphs } = element;
  const flattenParagraphs = flatten(paragraphs);
  const flattenWithoutParagraph = Object.keys(flattenParagraphs)
    .filter(key => !key.toLowerCase().includes('paragraph'))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: flattenParagraphs[key]
      };
    }, {});
  return Object.values(flattenWithoutParagraph).some(value =>
    value.toLowerCase().includes(text)
  );
};

const filter = (search, elements) => {
  return elements
    .filter(
      element =>
        titleHasText(element.title, search) ||
        someCollapseHasText(element, search)
    )
    .map(element => {
      if (titleHasText(element.title, search)) {
        const paragraphs = showAllParagraphs(element.paragraphs, search);
        return { ...element, show: true, paragraphs };
      }
      if (someCollapseHasText(element, search)) {
        const paragraphs = showParagraphsWithSearchedCollapses(
          element.paragraphs,
          search
        );
        return { ...element, show: false, paragraphs };
      }
      return {};
    });
};

const search = (text, elements) => {
  const searchedText = text.toLowerCase();
  if (searchedText.length < 4) {
    return showAll(elements);
  }
  return filter(searchedText, elements);
};

export default search;
