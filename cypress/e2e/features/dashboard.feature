@dashboard
Feature: Dashboard Access

  Scenario: User tries to access the dashboard with invalid credentials
    
    Given the user is on test-colmeia dashboard page
    When the user tap on "Campanha" icon
    Then Campanha tab should open 