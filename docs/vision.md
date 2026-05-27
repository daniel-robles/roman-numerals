# Vision Document - Roman Numeral Converter

## Problem statement
Transcribing between Roman numerals and integers is error-prone and unintuitive, especially for values that involve subtractive notation (e.g. IV, XL, CM). Without a reliable reference or tool, converting numbers outside the most common cases becomes increasingly difficult and inconsistent.

## Solution
A TypeScript library that converts integers to Roman numerals and back, handling all base symbols, additive combinations, subtractive edge cases, and input validation.

## Target user
Any developer who needs a reliable, well-tested utility for Roman numeral conversion in their application.

## Core features
- Convert integer to Roman numeral (`toRoman`)
- Convert Roman numeral to integer (`fromRoman`)
- Input validation with descriptive errors

## Tech stack

### Language
- TypeScript

### Testing
- Jest + ts-jest

### Coverage
- Istanbul (built into Jest)

## Out of scope
- Frontend / UI
- Numbers outside the range 1–3999
- Non-standard Roman numeral extensions (e.g. vinculum for large numbers)
- Localization or alternative numeral systems

## Roadmap

### V1 - MVP (current)
- `toRoman`: integer → Roman numeral
- `fromRoman`: Roman numeral → integer
- Full test coverage (90%+)

### V2 - Future (planned)
- Support for extended Roman numerals beyond 3999
- CLI interface