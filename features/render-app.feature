Feature: Render application

  Scenario: Application run without broken
    Given app don't have problem
    When run app
    Then application not break
