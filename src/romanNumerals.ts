export function toRoman(value: number): string {
  const ROMAN_NUMERALS: [number, string][] = [
    [1000, 'M'],
    [900,  'CM'],  // ← agregar
    [500,  'D'],
    [400,  'CD'],  // ← agregar
    [100,  'C'],
    [90,   'XC'],  // ← agregar
    [50,   'L'],
    [40,   'XL'],  // ← agregar
    [10,   'X'],
    [9,    'IX'],  // ← agregar
    [5,    'V'],
    [4,    'IV'],  // ← agregar
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