export const visitBaseUrl = () => {
  before(() => {
    cy.visit('');
  });
};
