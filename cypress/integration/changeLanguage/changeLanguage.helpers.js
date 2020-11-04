const languageSelectWrapper = '[data-cy=language-select-wrapper]';

const selectLanguage = selector => {
  cy.get(languageSelectWrapper).click();
  cy.get(selector).click();
};

const checkLanguage = languageCode => {
  cy.get(languageSelectWrapper)
    .should('have.attr', 'data-lang')
    .and('include', languageCode);
};

export const resolveChangeLanguage = (selector, languageCode) => () => {
  selectLanguage(selector);
  checkLanguage(languageCode);
};
