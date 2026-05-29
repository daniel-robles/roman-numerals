import { toRoman, fromRoman } from '../src/romanNumerals';

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

describe('toRoman - Combination of additive and subtractive cases', () => {
  test.each([
    [14, 'XIV'],
    [33, 'XXXIII'],
    [47, 'XLVII'],
    [69, 'LXIX'],
    [421, 'CDXXI'],
    [708, 'DCCVIII'],
    [2467, 'MMCDLXVII'],
  ])('converts %i to "%s" using both additive and subtractive notation', (input, expected) => {
    expect(toRoman(input)).toBe(expected);
  });
});

describe('toRoman - Boundary values: valid Roman numeral range is 1 to 3999', () => {
  test('1 is the minimum valid input and converts to "I"', () => {
    expect(toRoman(1)).toBe('I');
  });

  test('3999 is the maximum valid input and converts to "MMMCMXCIX"', () => {
    expect(toRoman(3999)).toBe('MMMCMXCIX');
  });
});

describe('toRoman - Input validation: invalid values should throw', () => {
  test('0 throws a RangeError', () => {
    expect(() => toRoman(0)).toThrow(RangeError);
  });

  test('-5 throws a RangeError', () => {
    expect(() => toRoman(-5)).toThrow(RangeError);
  });

  test('4000 throws a RangeError', () => {
    expect(() => toRoman(4000)).toThrow(RangeError);
  });

  test('14.55 throws a TypeError', () => {
    expect(() => toRoman(14.55)).toThrow(TypeError);
  });
});

describe('fromRoman - Convert valid Roman strings to integer', () => {
  test.each([
    ['I',          1],
    ['V',          5],
    ['X',          10],
    ['L',          50],
    ['C',          100],
    ['D',          500],
    ['M',          1000],
    ['IV',         4],
    ['IX',         9],
    ['XL',         40],
    ['XC',         90],
    ['CD',         400],
    ['CM',         900],
    ['XIV',        14],
    ['MCMXCIV',    1994],
    ['MMMCMXCIX',  3999],
  ])('converts "%s" to %i', (input, expected) => {
    expect(fromRoman(input)).toBe(expected);
  });
});

describe('fromRoman - Input validation: invalid characters should throw', () => {
  test('"AIV" contains an invalid character and throws a TypeError', () => {
    expect(() => fromRoman('AIV')).toThrow(TypeError);
  });
});

describe('fromRoman - Input validation: invalid character repetition should throw', () => {
  test('"IIII" has more than three consecutive repetitions and throws an Error', () => {
    expect(() => fromRoman('IIII')).toThrow(Error);
  });

  test('"VV" repeats a character that cannot be repeated and throws an Error', () => {
    expect(() => fromRoman('VV')).toThrow(Error);
  });
});
