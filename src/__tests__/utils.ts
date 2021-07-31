export function generateArrayOfString(count: number, flag: string): string[] {
  const array = Array.from({ length: count }, (v, k) => `${flag}${k}`);
  return array;
}

export function generateSortedArrayOfNumber(count: number): number[] {
  const array = Array.from({ length: count }, (v, k) => k);
  return array;
}