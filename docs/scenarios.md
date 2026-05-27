# Scenarios

## V1 - MVP

### First scenario

``` gherkin
Scenario Outline: Base symbols - Convert base integer to Roman
  Given the integer <input>
  When I convert it to Roman
  Then the result should be <expected>

  Examples:
    | input | expected |
    | 1     | "I"      |
    | 5     | "V"      |
    | 10    | "X"      |
    | 50    | "L"      |
    | 100   | "C"      |
    | 500   | "D"      |
    | 1000  | "M"      |
```