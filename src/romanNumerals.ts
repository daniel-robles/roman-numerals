const VALID_SUBTRACTIVE_PAIRS = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];

const ROMAN_VALUES: { [key: string]: number } = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

const ROMAN_NUMERALS: [number, string][] = [
  [1000, 'M'],
  [900,  'CM'],
  [500,  'D'],
  [400,  'CD'],
  [100,  'C'],
  [90,   'XC'],
  [50,   'L'],
  [40,   'XL'],
  [10,   'X'],
  [9,    'IX'],
  [5,    'V'],
  [4,    'IV'],
  [1,    'I'],
];

function validateToRomanInput(value: number): void {
  if (!Number.isInteger(value)) {
    throw new TypeError('Input must be an integer');
  }
  if (value < 1 || value > 3999) {
    throw new RangeError('Input must be a positive integer between 1 and 3999');
  }
}

export function toRoman(value: number): string {
  validateToRomanInput(value);

  let remaining = value;
  let result = '';

  for (const [number, symbol] of ROMAN_NUMERALS) {
    while (remaining >= number) {
      remaining -= number;
      result += symbol;
    }
  }

  return result;
}

function validateCharacters(roman: string): void {
  if (!/^[IVXLCDM]+$/.test(roman)) {
    throw new TypeError('Input contains invalid Roman numeral characters');
  }
}

function validateRepetition(roman: string): void {
  if (/([VLD])\1/.test(roman)) {
    throw new Error('Characters V, L, and D cannot be repeated');
  }

  if (/([IXCM])\1{3}/.test(roman)) {
    throw new Error('No character can repeat more than three times in a row');
  }
}

function validateSubtractivePairs(roman: string): void {
  for (let i = 0; i < roman.length - 1; i++) {
    const current = ROMAN_VALUES[roman[i]];
    const next = ROMAN_VALUES[roman[i + 1]];
    if (current < next) {
      const pair = roman[i] + roman[i + 1];
      if (!VALID_SUBTRACTIVE_PAIRS.includes(pair)) {
        throw new Error(`Invalid subtractive pair: ${pair}`);
      }
    }
  }
}

export function fromRoman(roman: string): number {
  let total = 0;
  validateCharacters(roman);
  validateRepetition(roman);
  validateSubtractivePairs(roman);
  
  for (let i = 0; i < roman.length; i++) {
    const currentValue = ROMAN_VALUES[roman[i]];
    const nextValue = i + 1 < roman.length ? ROMAN_VALUES[roman[i + 1]] : 0;

    if (currentValue >= nextValue) {
      total += currentValue;
    } else {
      total -= currentValue;
    }
  }

  return total;
}