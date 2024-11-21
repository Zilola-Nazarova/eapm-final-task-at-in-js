Feature: Login
  Background: 
    Given I am on the "login" page
    
  Scenario: As a user, I can not login without a username
    When I enter "any" username and "any" password
    And I clear "username" in login form
    And I clear "password" in login form
    And I click login button in login form
    Then I should see an error message that should "contain" "Username is required"

  Scenario: As a user, I can not login without a password
    When I enter "any" username and "any" password
    And I clear "password" in login form
    And I click login button in login form
    Then I should see an error message that should "contain" "Password is required"

  Scenario: As a user, I can not login if I am locked out
    When I enter "locked out" username and "valid" password
    And I click login button in login form
    Then I should see an error message that should "contain" "Sorry, this user has been locked out."

  Scenario Outline: As a user, I can login with valid username and password
    When I login with valid credentials - <username> and <password>
    And I click login button in login form
    Then I should see an Inventory page with logo text that should "be equal to" "Swag Labs"

    Examples: 
      | username                | password      |
      | standard_user           | secret_sauce  |
      | problem_user            | secret_sauce  |
      | performance_glitch_user | secret_sauce  |
      | error_user              | secret_sauce  |
      | visual_user             | secret_sauce  |
