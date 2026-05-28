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

### Third scenario

Unlike base symbols (scenario 1) or additive combinations (scenario 2), some integers require placing a smaller symbol **before** a larger one to indicate subtraction rather than addition.

``` gherkin
Scenario: Subtractive case - 4 is represented subtractively as "IV", not additively as "IIII"
  Given the integer 4
  When I convert it to Roman
  Then the result should be "IV" and not "IIII"
```

``` gherkin
Scenario: Subtractive case - 9 is represented subtractively as "IX", not additively as "VIIII"
  Given the integer 9
  When I convert it to Roman
  Then the result should be "IX" and not "VIIII"
```

``` gherkin
Scenario: Subtractive case - 40 is represented subtractively as "XL", not additively as "XXXX"
  Given the integer 40
  When I convert it to Roman
  Then the result should be "XL" and not "XXXX"
```

``` gherkin
Scenario: Subtractive case - 90 is represented subtractively as "XC", not additively as "LXXXX"
  Given the integer 90
  When I convert it to Roman
  Then the result should be "XC" and not "LXXXX"
```

``` gherkin
Scenario: Subtractive case - 400 is represented subtractively as "CD", not additively as "CCCC"
  Given the integer 400
  When I convert it to Roman
  Then the result should be "CD" and not "CCCC"
```

``` gherkin
Scenario: Subtractive case - 900 is represented subtractively as "CM", not additively as "DCCCC"
  Given the integer 900
  When I convert it to Roman
  Then the result should be "CM" and not "DCCCC"
```

### Fourth scenario
``` gherkin
Scenario Outline: Combination of additive and subtraction cases
  Given the input <input>
  When I convert it to Roman
  Then the result should be <expected>

  Examples:
    | input | expected    |
    | 14    | "XIV"       |
    | 33    | "XXXIII"    |
    | 47    | "XLVII"     |
    | 69    | "LXIX"      |
    | 421   | "CDXXI"     |
    | 708   | "DCCVIII"   |
    | 2467  | "MMCDLXVII" |
```

### Fifth scenario
``` gherkin
Scenario: Minimum number
  Given the input is 1
  When I convert it to Roman
  Then the result should be "I"
```

``` gherkin
Scenario: Maximum number
  Given the input is 3999
  When I convert it to Roman
  Then the result should be "MMMCMXCIX"
```
