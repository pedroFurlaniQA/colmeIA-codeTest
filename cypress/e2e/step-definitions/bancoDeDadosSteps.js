import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

// Scenario 1 : Validate that is possible to create a new item on the database

Given('the user is on Banco de dados', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.visit(el.url);
    cy.get(el.emailField).type(el.validEmail);
    cy.get(el.passwordField).type(el.validPassword);
    cy.get(el.loginButton).click();
    cy.contains('button', el.continueButton).click();
    cy.get(el.campanhaIcon).click();
    cy.get(el.bancoDeDadosLink).click();
    cy.url().should('include', el.bancoDeDadosUrl);
  });
});

When('the user tap on "Criar" button', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.get(el.criarButton).click();
  });
});

Then('"Adicionar novo item" pop up should show up', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.contains('button', el.saveButton).should('be.visible');
  });
});

When('the user fill "Nome do item" field and click save button', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.get(el.itemNameInput).type(el.itemName1);
    cy.contains('button', el.saveButton).click();
    cy.contains('button', el.criarConfirmButton).click();
    cy.get(el.itemNameInput).type(el.itemName2);
    cy.contains('button', el.saveButton).click();
  });
});

Then('the new item should be added to the database list', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.contains(el.itemName1).should('be.visible');
    cy.contains(el.itemName2).should('be.visible');
  });
});

// Scenario 2 : Validate that is possible to search for an item on the database

When('the user fill the search field with an existing item name', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.get(el.searchField).type(el.itemName1);
  });
});

Then('the user should be able to see the searched item on the list', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.contains(el.itemName1).should('be.visible');
    cy.contains(el.itemName2).should('not.exist');
  });
});

// Scenario 3 : Validate that is possible to go to arquivados tab

When('the user tap on arquivados icon', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.get(el.arquivadosIcon).click();
  });
});

Then('the user should be able to see the list of arquivados items', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.get(el.arquivadosHeading).should('be.visible').and('contain', el.arquivadosHeadingText);
  });
});

// Scenario : Validate that is possible to delete an item on database

When('the user tap on "deletar" icon of an item', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.get(el.criarButton).click();
    cy.get(el.itemNameInput).type(el.itemNameDelete);
    cy.contains('button', el.saveButton).click();
    cy.get(el.deleteIcon).click();
  });
});

Then('the item shold be deleted permanently', () => {
  cy.fixture('bancoDeDadosPOM').then((el) => {
    cy.contains(el.itemNameDelete).should('not.exist');
  });
});

// Nao automatizei a funçao de arquivar pois a mesma nao estava funcionando, e acabei criando um bug report para isso.