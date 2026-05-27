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
