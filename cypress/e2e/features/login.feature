@login
Feature: Login Functionality

  Scenario: Unsuccessful login with invalid credentials
    Given the user is on the login page
    When the user enters invalid credentials
    And the user clicks the login button
    Then the user should see an error message indicating invalid credentials

  Scenario: Unsuccessful login with empty fields
    Given the user is on the login page
    When the user leaves the username and password fields empty
    And the user clicks the login button
    Then the user should see an error message indicating that fields cannot be empty
  
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks the login button
    Then the user should see a welcome message
    When the user clicks on "Continuar"
    Then the user should be redirected to the dashboard
    

   