import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on Campain Tab', () => {
  cy.fixture('colmeiaFormsPOM').then((el) => {
    cy.visit(el.url);
    cy.get(el.emailField).type(el.validEmail);
    cy.get(el.passwordField).type(el.validPassword);
    cy.get(el.loginButton).click();
    cy.contains('button', el.continueButton).click();
    cy.get(el.campanhaIcon).click();
    cy.url().should('include', el.campanhaUrl);
  });
});

When('the user tap on Colmeia Forms', () => {
  cy.fixture('colmeiaFormsPOM').then((el) => {
    cy.get(el.colmeiaFormsLink).click();
  });
});

Then('the user should be redirected to Colmeia Forms page', () => {
  cy.fixture('colmeiaFormsPOM').then((el) => {
    cy.url().should('include', el.colmeiaFormsUrl);
  });
});