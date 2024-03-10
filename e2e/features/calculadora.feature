Feature: make it work the calculator
  - add
  - substract
  - multiply
  - Divide
  - Divide by 0
  - Clean
  - Delete a number

  Scenario Outline: Make an operation
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
      | 2    | x         | 4    | 8      |
      | 8    | /         | 2    | 4      |

    Scenario: Factorial Operation
      Given I have a calculator
      When I click on button 5
      And I click on operation button '!'
      And I click on operation button '='
      Then I will have as a result 120