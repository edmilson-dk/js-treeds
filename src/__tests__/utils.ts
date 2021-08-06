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
