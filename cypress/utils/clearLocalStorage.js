export const clearLocalStorage = () => {
  before(() => {
    cy.clearLocalStorage();
  });
};
