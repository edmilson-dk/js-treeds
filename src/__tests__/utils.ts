export function generateArrayOfString(count: number, flag: string): string[] {
  const array = Array.from({ length: count }, (v, k) => `${flag}${k}`);
  return array;
}

export function generateSortedArrayOfNumber(count: number, isNegative = false): number[] {
  const array = Array.from({ length: count }, (v, k) => (isNegative ? -Math.abs(k) : k));
  return array;
}

export function generateNotSortedArrayOfNumber(count: number, isNegative = false): number[] {
  const array = Array.from({ length: count }, (v, k) => (isNegative ? -Math.abs(k) : k));
  array.reverse();
  return array;
}

export const arrayNotOrdenatedWithRepeatedElements = [1, 3, 1, 4, 3, 5, 10, 12, 10, 23, 4, 11];
export const arrayOrdenatedWithRepeatedElements = [1, 1, 3, 3, 4, 4, 5, 10, 10, 11, 12, 23];
