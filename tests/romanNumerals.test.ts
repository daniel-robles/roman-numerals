import { toRoman } from '../src/romanNumerals';

describe('toRoman - Base symbols', () => {
  test.each([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
  ])('converts %i to "%s"', (input, expected) => {
    expect(toRoman(input)).toBe(expected);
  });
});

describe('toRoman - Additive combinations', () => {
  test.each([
    [2, 'II'],
    [3, 'III'],
    [6, 'VI'],
    [11, 'XI'],
    [15, 'XV'],
    [110, 'CX'],
    [1500, 'MD'],
  ])('converts %i (not a base symbol) to "%s"', (input, expected) => {
    expect(toRoman(input)).toBe(expected);
  });
});

describe('toRoman - Subtractive cases: a smaller symbol before a larger one means subtraction, not addition', () => {
  test.each([
    [4, 'IV', 'IIII'],
    [9, 'IX', 'VIIII'],
    [40, 'XL', 'XXXX'],
    [90, 'XC', 'LXXXX'],
    [400, 'CD', 'CCCC'],
    [900, 'CM', 'DCCCC'],
  ])('%i is represented subtractively as "%s", not additively as "%s"', (input, expected, notExpected) => {
    const result = toRoman(input);
    expect(result).toBe(expected);
    expect(result).not.toBe(notExpected);
  });
});

