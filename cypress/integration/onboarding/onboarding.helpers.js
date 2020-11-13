import { getByDataCy } from '../../utils/getByDataCy';

export const nextButtonShouldBeDisabled = () =>
  getByDataCy('button-default')
    .should('be.visible')
    .should('be.disabled');

export const nextButtonShouldBeEnabled = () =>
  getByDataCy('button-default')
    .should('be.visible')
    .should('be.enabled');

export const changeExplainerStepByDot = (prev, next) => {
  getByDataCy(`explainer-step-${prev}`)
    .should('be.visible')
    .within(() => {
      cy.get(`.slick-dots > li:nth-child(${next}) button`).click();
      cy.wait(500);
    });
  cy.wait(500);
}
