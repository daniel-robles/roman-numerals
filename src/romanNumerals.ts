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

export function toRoman(value: number): string {
  if (!Number.isInteger(value)) {
    throw new TypeError('Input must be an integer');
  }

  if (value < 1 || value > 3999) {
    throw new RangeError('Input must be a positive integer between 1 and 3999');
  }

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

export function fromRoman(roman: string): number {
  let total = 0;

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