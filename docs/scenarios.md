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

### Second scenario

``` gherkin
Scenario Outline: Additive combinations - Convert base integer to Roman
  Given the integer <input> which is not part of the base symbols
  When I convert it to Roman
  Then the result should be <expected>

  Examples:
    | input | expected  |
    | 2     | "II"      |
    | 3     | "III"     |
    | 6     | "VI"      |
    | 11    | "XI"      |
    | 15    | "XV"      |
    | 110   | "CX"      |
    | 1500  | "MD"      |
```