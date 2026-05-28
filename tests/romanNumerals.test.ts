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

