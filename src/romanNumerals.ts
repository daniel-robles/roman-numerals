export function toRoman(value: number): string {
  const ROMAN_NUMERALS: [number, string][] = [
    [1000, 'M'],
    [500,  'D'],
    [100,  'C'],
    [50,   'L'],
    [10,   'X'],
    [5,    'V'],
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