# Roman Numeral Converter

A TypeScript library that converts integers to Roman numerals and back, built following Test-Driven Development (TDD) principles.

## Domain Rules

Roman numerals use 7 base symbols:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

### Additive rule
Symbols written left to right from largest to smallest are summed.
Example: XII = 10 + 1 + 1 = 12

### Subtractive rule
6 special pairs where a smaller symbol precedes a larger one:

| Pair | Value |
|------|-------|
| IV   | 4     |
| IX   | 9     |
| XL   | 40    |
| XC   | 90    |
| CD   | 400   |
| CM   | 900   |

### Repetition rules
- I, X, C, M can repeat up to 3 times consecutively
- V, L, D cannot be repeated

### Valid range
- Minimum: 1
- Maximum: 3999

## Project Structure

    roman-numerals/
    ├── src/
    │   └── romanNumerals.ts
    ├── tests/
    │   ├── toRoman.test.ts
    │   └── fromRoman.test.ts
    ├── scenarios.md
    ├── vision.md
    ├── jest.config.ts
    ├── tsconfig.json
    └── README.md

## Setup

    npm install

## Running Tests

    # Run all tests
    npm test

    # Watch mode during development
    npm run test:watch

## Running Coverage

    npm run test:coverage

After running coverage, the HTML report is available at:

    coverage/lcov-report/index.html

## Running the CLI

    npm run cli

The CLI allows you to test the library interactively:

    Options:
      1 → Integer to Roman
      2 → Roman to Integer
      q → Quit

## TDD Commit Convention

Each red-green-refactor cycle produces 3 commits:

    docs:     [SCENARIO] description
    test:     [RED]      description
    feat:     [GREEN]    description
    refactor: [REFACTOR] description

## Coverage Report

| File             | Statements | Branches | Functions | Lines |
|------------------|------------|----------|-----------|-------|
| romanNumerals.ts | 100%       | 100%     | 100%      | 100%  |