import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Scenario 01 - Login with invalid credentials

Given('the user is on the login page', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.visit(el.url);
  });
});

When('the user enters invalid credentials', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.get(el.emailField).type(el.invalidEmail);
    cy.get(el.passwordField).type(el.invalidPassword);
  });
});

When('the user clicks the login button', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.get(el.loginButton).should('be.visible').click();
  });
});

Then('the user should see an error message indicating invalid credentials', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.get(el.errorMessage).should('be.visible').and('contain', el.errorText);
  });
});

// Scenario 02 - Login with empty fields (Bug encontrado nesse scenario , uma vez que o usuario abre a pagina e aperta continuar sem preencher os campos a mensagem errada e disparada , a menssagem para field=null so e disparada quando o usuario deleta o que ja foi escrito)

When('the user leaves the username and password fields empty', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.get(el.emailField).clear();
    cy.get(el.passwordField).clear();
  });
});

Then('the user should see an error message indicating that fields cannot be empty', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.contains(el.errorText).should('be.visible');
  });
});

// Scenario 03 - Login with valid credentials (Bug encontrado nesse scenario , quando o usuario loga a mensagem errada e disparada , "Seu login está incorreto, quer continuar?" , com isso usei o step de validaçao a visibilidade do botao continuar )

When('the user enters valid credentials', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.get(el.emailField).type(el.validEmail);
    cy.get(el.passwordField).type(el.validPassword);
  });
});

Then('the user should see a welcome message', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.contains('button', el.continueButton).and('contain', el.welcomeText);
  });
});

When('the user clicks on "Continuar"', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.contains('button', el.continueButton).click();
  });
});

Then('the user should be redirected to the dashboard', () => {
  cy.fixture('loginPOM').then((el) => {
    cy.url().should('include', el.dashboardUrl);
  });
});