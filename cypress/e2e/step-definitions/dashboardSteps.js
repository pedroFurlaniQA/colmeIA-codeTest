import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on test-colmeia dashboard page', () => {
  cy.fixture('dashboardPOM').then((el) => {
    cy.visit(el.url);
    cy.get(el.emailField).type(el.validEmail);
    cy.get(el.passwordField).type(el.validPassword);
    cy.get(el.loginButton).click();
    cy.contains('button', el.continueButton).click();
    cy.url().should('include', el.dashboardUrl);
  });
});

When('the user tap on "Campanha" icon', () => {
  cy.fixture('dashboardPOM').then((el) => {
    cy.get(el.campanhaIcon).click();
  });
});

Then('Campanha tab should open', () => {
  cy.fixture('dashboardPOM').then((el) => {
    cy.contains('h3', el.campanhaHeading).should('be.visible');
  });
});