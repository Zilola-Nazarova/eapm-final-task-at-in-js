Feature: Login
  Background: 
    Given I am on the "login" page
    And I enter "valid" username and "valid" password

  Scenario: As a user, I can not login without a username

    When I clear "username" in login form
    And I click login button in login form
    Then I should see an error message that should "contain" "Username is required"

  Scenario: As a user, I can not login without a password

    When I clear "password" in login form
    And I click login button in login form
    Then I should see an error message that should "contain" "Password is required"

  Scenario: As a user, I can login with valid username and password

    When I click login button in login form
    Then I should see an Inventory page with logo text that should "be equal to" "Swag Labs"
