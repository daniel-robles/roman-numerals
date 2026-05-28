export function toRoman(value: number): string {
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

  let result = '';
  for (const [num, symbol] of ROMAN_NUMERALS) {
    while (value >= num) {
      value -= num;
      result += symbol;
    }
  }
  return result;
}

export function fromRoman(s: string): number {
  throw new Error('Not implemented');
}