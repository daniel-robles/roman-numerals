export function toRoman(value: number): string {
  const ROMAN_NUMERALS: { [key: number]: string } = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    2: 'II',
    3: 'III',
    6: 'VI',
    11: 'XI',
    15: 'XV',
    110: 'CX',
    1500: 'MD',
  };
  return ROMAN_NUMERALS[value] || '';
}

export function fromRoman(s: string): number {
  throw new Error('Not implemented');
}