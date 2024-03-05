Feature: show the number clicked
  Everytime I click on a number, it should show on the screen

  Scenario Outline: Show the number clicked
    Given I have a calculator
    When I click on button <num1>
    And I click on operation button "<operation>"
    And I click on button <num2>
    And I click on operation button '='
    Then I will have as a result <result>

    Examples:
      | num1 | operation | num2 | result |
      | 1    | +         | 2    | 3      |
      | 2    | +         | 2    | 4      |
      | 2    | -         | 2    | 0      |
      | 2    | x         | 4    | 8      |