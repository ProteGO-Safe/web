/*
 * Onboarding
 */
import { visitBaseUrl } from '../../utils/visitBaseUrl';
import { clearLocalStorage } from '../../utils/clearLocalStorage';
import { resolveChangeLanguage } from '../changeLanguage/changeLanguage.helpers';
import { getByDataCy } from '../../utils/getByDataCy';
import {
  changeExplainerStepByDot,
  nextButtonShouldBeDisabled,
  nextButtonShouldBeEnabled
} from './onboarding.helpers';
import { dateFormat } from '../../../src/hooks/useFilledDiagnosis';

describe('Onboarding after first log in to the app', () => {
  clearLocalStorage();
  visitBaseUrl();

  const changeLanguageToPolish = resolveChangeLanguage('#select_flag_PL', 'PL');

  it('should change the language', () => {
    changeLanguageToPolish();
  });

  it('should display subtitle', () => {
    getByDataCy('start-screen-subtitle')
      .should('be.visible')
      .contains('Pokonajmy razem koronawirusa!');
  });

  it('should click button to start the process', () => {
    getByDataCy('start-screen-button').click();
  });

  // todo: https://titans24.atlassian.net/browse/SCPSU-398 - handle swipe event in carousel

  it('should display screen about not supported version', () => {
    getByDataCy('view-onboarding')
      .should('be.visible')
      .within(() => {
        getByDataCy('onboarding-title')
          .should('be.visible')
          .contains('Niezgodna wersja');
        nextButtonShouldBeEnabled().click();
      });
  });

  it('should display four steps carousel and navigate between slides via dots and button', () => {
    getByDataCy('view-explainer').within(() => {
      changeExplainerStepByDot(1, 2);

      changeExplainerStepByDot(2, 3);

      changeExplainerStepByDot(3, 4);

      changeExplainerStepByDot(4, 3);

      changeExplainerStepByDot(3, 2);

      changeExplainerStepByDot(2, 1);

      getByDataCy('explainer-step-1').should('be.visible');
      nextButtonShouldBeEnabled().click();
      cy.wait(500);

      getByDataCy('explainer-step-2').should('be.visible');
      nextButtonShouldBeEnabled().click();
      cy.wait(500);

      getByDataCy('explainer-step-3').should('be.visible');
      nextButtonShouldBeEnabled().click();
      cy.wait(500);

      // todo: Handle swipe event
      // getByDataCy('explainer-step-4')
      //   .trigger('mousedown')
      //   .trigger('mousemove', { clientX: 200, clientY: 0 })
      //   .trigger('mouseup', { force: true });
      // cy.wait(500);

      getByDataCy('explainer-step-4').should('be.visible');
      nextButtonShouldBeEnabled().click();
      cy.wait(500);
    });
  });

  it('should display terms with checkbox', () => {
    getByDataCy('view-terms')
      .should('be.visible')
      .within(() => {
        getByDataCy('checkbox-label-term1')
          .should('be.visible')
          .click();
        getByDataCy('checkbox-input-term1').should('be.checked');
        getByDataCy('button-default').click();
      });
  });

  it('should display name form', () => {
    getByDataCy('view-name-form')
      .should('be.visible')
      .within(() => {
        const clearInput = () =>
          getByDataCy('input-with-counter-name').type('{selectall}{backspace}');

        const enterNickname = (input, output) =>
          getByDataCy('input-with-counter-name')
            .should('be.visible')
            .type(input)
            .should('have.attr', 'value')
            .and('include', output);

        const errorIsVisible = () =>
          getByDataCy('input-with-counter-error-name').should('be.visible');

        // Empty value
        nextButtonShouldBeDisabled();

        // Normal characters
        enterNickname('Lorem Ipsum', 'Lorem Ipsum');
        nextButtonShouldBeEnabled();
        getByDataCy('button-default').click();
        errorIsVisible();

        clearInput();
        nextButtonShouldBeDisabled();

        // Special characters
        enterNickname('!@#$%^&*()<>', '!@#$%^&*()<>');
        nextButtonShouldBeEnabled();
        getByDataCy('button-default').click();
        errorIsVisible();
        clearInput();

        // Long text, longer than 12 characters
        enterNickname('The very long nickname', 'The very lon');
        nextButtonShouldBeEnabled();
        getByDataCy('button-default').click();
        errorIsVisible();
        clearInput();

        // todo: handle emoji

        // Valid nickname
        enterNickname('Developer', 'Developer');
        nextButtonShouldBeEnabled();
        getByDataCy('button-default').click();
      });
  });

  it('should display first diagnosis ask asking view', () => {
    getByDataCy('view-first-diagnosis-asking')
      .should('be.visible')
      .within(() => {
        getByDataCy('button-default').click();
      });
  });

  it('should display information view', () => {
    getByDataCy('view-information')
      .should('be.visible')
      .within(() => {
        getByDataCy('button-default').click();
      });
  });

  it('should check age', () => {
    getByDataCy('view-diagnosis-age')
      .should('be.visible')
      .within(() => {
        nextButtonShouldBeDisabled();
        getByDataCy('radio-label-age-is-elderly')
          .should('be.visible')
          .click();
        getByDataCy('radio-input-age-is-elderly').should('be.checked');
        nextButtonShouldBeEnabled().click();
      });
  });

  it('should make risk test', () => {
    // Diseases
    getByDataCy('view-diagnosis')
      .should('be.visible')
      .within(() => {
        nextButtonShouldBeDisabled();
        getByDataCy('checkbox-label-Żadne z powyższych')
          .should('be.visible')
          .click();
        getByDataCy('checkbox-input-Żadne z powyższych').should('be.checked');
        nextButtonShouldBeEnabled().click();
      });

    // Symptoms part 1
    getByDataCy('view-diagnosis')
      .should('be.visible')
      .within(() => {
        nextButtonShouldBeDisabled();
        getByDataCy('checkbox-label-Żadne z powyższych')
          .should('be.visible')
          .click();
        getByDataCy('checkbox-input-Żadne z powyższych').should('be.checked');
        nextButtonShouldBeEnabled().click();
      });

    // Symptoms part 2
    getByDataCy('view-diagnosis')
      .should('be.visible')
      .within(() => {
        nextButtonShouldBeDisabled();
        getByDataCy('checkbox-label-Żadne z powyższych')
          .should('be.visible')
          .click();
        getByDataCy('checkbox-input-Żadne z powyższych').should('be.checked');
        nextButtonShouldBeEnabled().click();
      });

    // Question about contact with other persons
    getByDataCy('view-diagnosis')
      .should('be.visible')
      .within(() => {
        nextButtonShouldBeDisabled();
        getByDataCy('radio-label-p_15-undefined')
          .should('be.visible')
          .click();
        getByDataCy('radio-input-p_15-undefined').should('be.checked');
        nextButtonShouldBeEnabled().click();
      });
  });

  it('should display summary', () => {
    getByDataCy('view-summary-risk-test').should('be.visible');
    nextButtonShouldBeEnabled().click();
  });

  it('should display home screen', () => {
    getByDataCy('view-home').should('be.visible');
  });

  it('should display green smile with corrected date', () => {
    const lastRiskTestDate = Cypress.moment().format(dateFormat);
    getByDataCy('risk-test-last-date').should('have.text', lastRiskTestDate);
    getByDataCy('green-smile').should('be.visible');
  });

  it('should enable exposure notification', () => {
    cy.window().then(win => {
      win.onBridgeData(
        51,
        JSON.stringify({
          servicesStatus: {
            exposureNotificationStatus: 1,
            isLocationOn: true,
            isBtOn: true,
            isNotificationEnabled: true
          }
        })
      );
      getByDataCy('exposure-notification-info').should('be.visible');
    });
  });
});
