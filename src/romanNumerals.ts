export function toRoman(number: number): string {
  const romanNumerals: { [key: number]: string } = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };

  return romanNumerals[number] || '';
}

export function fromRoman(s: string): number {
  throw new Error('Not implemented');
}