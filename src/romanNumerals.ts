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
  let romanResult = '';

  if (value === 0 || value < 1 || value > 3999) {
    throw new RangeError('Input must be a positive integer between 1 and 3999');
  }

  if (!Number.isInteger(value)) {
    throw new TypeError('Input must be an integer');
  }

  for (const [number, symbol] of ROMAN_NUMERALS) {
    while (value >= number) {
      value -= number;
      romanResult += symbol;
    }
  }
  return romanResult;
}

export function fromRoman(s: string): number {
  throw new Error('Not implemented');
}