Feature: Login

  Scenario: As a user, I can not login without a username

    Given I am on the "login" page
    When I enter any username and any password
    And I clear "username" in login form
    And I click login button in login form
    Then I should see an error message that should "contain" "Username is required"

  Scenario: As a user, I can not login without a username

    Given I am on the "login" page
    When I enter any username and any password
    And I clear "password" in login form
    And I click login button in login form
    Then I should see an error message that should "contain" "Password is required"

  Scenario: As a user, I can not login without a username

    Given I am on the "login" page
    When I enter valid username and valid password
    And I click login button in login form
    Then I should see an Inventory page title that should "be equal to" "Swag Labs"
