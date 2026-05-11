@bancoDeDados
Feature: Banco de Dados Access

  Scenario: Validate that is possible to create a new iten on the database
    
    Given the user is on Banco de dados
    When the user tap on "Criar" button
    Then "Adicionar novo item" pop up should show up 

    When the user fill "Nome do item" field and click save button 
    Then the new item should be added to the database list
  
  Scenario: Validate that is possible to search for an item on the database

    Given the user is on Banco de dados 
    When the user fill the search field with an existing item name 
    Then the user should be able to see the searched item on the list

  Scenario: Validate that is possible to go to arquivados tab
    
    Given the user is on Banco de dados  
    When the user tap on arquivados icon 
    Then the user should be able to see the list of arquivados items


  Scenario: Validate that is possible to delete an item on database

    Given the user is on Banco de dados 
    When the user tap on "deletar" icon of an item 
    Then the item shold be deleted permanently 